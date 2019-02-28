import * as React from 'react'
import ZoomModal from '../Modals/ZoomModal'
import {Image, Modals} from '../../@types/data'
import {pull, indexOf} from 'lodash'
import {createZoomLog} from '../../api/log'
import CoverButton from '../Buttons/CoverButton'
import RemoveButton from '../Buttons/RemoveButton'
import FavoriteButton from '../Buttons/FavoriteButton'
import CollectButton from '../Buttons/CollectButton'
import DownloadButton from '../Buttons/DownloadButton'
import Img from '../Widgets/Img'
import {ADMIN_USER_IDS, IMAGE_SIZES, SCORES} from '../../constants/conf'
import InfoButton from '../Buttons/InfoButton'
import NameValue from '../Texts/KeyValue'
import {showUser} from '../../service/link'
import VoteDownButton from '../Buttons/VoteDownButton'
import {connect} from 'react-redux'
import {RootState} from '../../redux'
import {
  appendVoteDownImageIds,
  appendVoteUpImageIds, AuthState,
  removeVoteImage,
} from '../../redux/auth'
import VoteUpButton from '../Buttons/VoteUpButton'
import {updateImageName, updateImageVote} from '../../api/image'
import {error, success} from '../../lib/message'
import {Direction} from '../Buttons/VoteBaseButton'
import {changeImageVoteDown, changeImageVoteUp} from '../../redux/images'
import EditableText from '../Forms/EditableText'
import ImageTag from '../Tags/ImageTag'
import AddImageTag from '../Tags/AddImageTag'
import {lang} from '../../constants/lang'
import {Icon, Button} from 'antd'
import AuthModal from '../Modals/AuthModal'

const ButtonGroup = Button.Group

export interface Props {
  image: Image
  index?: number
  albumId?: number
  albumOwnerId?: number
  inZoomModal?: boolean
  onClickImage?: () => void
  loadMore?: () => void
  onRemoveAlbumImageSuccess?: (imageId: number) => void
}

interface InjectedProps extends Props {
  auth: AuthState
  voteUpImageIds: number[]
  voteDownImageIds: number[]
  removeVoteImage: (imageId: number) => void
  appendVoteUpImageIds: (ids: number[]) => void
  appendVoteDownImageIds: (ids: number[]) => void
  changeImageVoteUp: (imageId: number, step: number) => void
  changeImageVoteDown: (imageId: number, step: number) => void
  changeAlbumImageVoteUp: (imageId: number, step: number) => void
  changeAlbumImageVoteDown: (imageId: number, step: number) => void
}


// FIXME 修改为动态step
let upStep = 1
let downStep = -1
let defaultVoteStep = 1

class ImageCard extends React.Component<Props> {

  state = {
    zoomVisible: false,
    buttonsVisible: false,
    displayedModals: [],
    imageVoteLoading: false,
    tagChecked: false,
    editingName: false,
    name: this.props.image.name,
    authVisible: false,
  }
  timers = {} as any

  constructor(props) {
    super(props)
    if (indexOf(props.auth.id, ADMIN_USER_IDS) !== -1) {
      upStep = 10
      downStep = -10
      defaultVoteStep = 10
    }
  }

  get getProps() {
    return this.props as InjectedProps
  }

  get canDisplayZoomModal() {
    return typeof this.props.onClickImage === 'undefined'
  }

  changeAuthVisible(visible: boolean) {
    this.setState({authVisible: visible})
    this.changeHasDisplayedModal(Modals.AUTH, visible)
  }

  changeZoomVisible(visible: boolean) {
    if (visible) {
      createZoomLog(this.props.image.id)
    }

    this.setState({zoomVisible: visible})
    this.changeHasDisplayedModal(Modals.ZOOM, visible)
  }

  onClickImage(visible: boolean) {
    if (this.canDisplayZoomModal) {
      this.changeZoomVisible(visible)
      this.changeHasDisplayedModal(Modals.ZOOM, visible)
      return
    }
    this.props.onClickImage()
  }

  changeHasDisplayedModal(name: Modals, status: boolean) {
    if (status) {
      this.setState({displayedModals: [...this.state.displayedModals, name]})
      return
    }
    const modals = [...this.state.displayedModals]
    pull(modals, name)
    this.setState({displayedModals: modals})
  }

  Image() {
    const {image, inZoomModal} = this.props
    return (
      <Img
        title={image.name}
        src={image.src}
        alt={image.name}
        style={{maxWidth: '100%', cursor: inZoomModal ? 'zoom-out' : 'zoom-in'}}
        onClick={this.onClickImage.bind(this, true)}
        size={inZoomModal ? IMAGE_SIZES.ORIGIN : IMAGE_SIZES.SMALL}
      />
    )
  }

  ZoomModal() {
    const {auth, albumId, image, index, loadMore} = this.getProps
    const authId = auth.id
    const {zoomVisible} = this.state
    if (!this.canDisplayZoomModal || !zoomVisible) {
      return null
    }

    return (
      <ZoomModal
        visible={zoomVisible}
        image={image}
        albumId={albumId}
        authId={authId}
        index={index}
        loadMore={loadMore}
        hide={this.changeZoomVisible.bind(this, false)}
      />
    )
  }

  Buttons() {
    const {
      image,
      auth,
      albumId,
      albumOwnerId,
      onRemoveAlbumImageSuccess,
      voteUpImageIds,
      voteDownImageIds,
    } = this.getProps
    const authId = auth.id
    if (!this.state.buttonsVisible) {
      return null
    }
    const imageSrc = image.src
    const imageId = image.id

    let albumButtons = null
    if (albumOwnerId === authId && albumOwnerId > 0) {
      albumButtons = (
        <span style={{width: '100%'}}>
          <CoverButton imageSrc={imageSrc} albumId={albumId}/>
          <RemoveButton
            imageId={imageId}
            albumId={albumId}
            onSuccess={onRemoveAlbumImageSuccess
              ? onRemoveAlbumImageSuccess.bind(this)
              : () => {
              }
            }
          />
        </span>
      )
    }

    // FIXME 修改为真实上传者
    const uploaderId = 1799
    const uploaderName = 'cooler'
    const uploadedAt = '2017-03-01 12:04:35'

    const infoContent = (
      <div>
        <NameValue name={'上传用户'} value={<a href={showUser(uploaderId)}>{uploaderName}</a>}/>
        <NameValue name={'上传时间'} value={uploadedAt}/>
        <NameValue name={'肖像权/物权'} value={'未知'}/>
        <NameValue name={'版权所有'} value={'创作者'}/>
        <NameValue name={'使用说明'} value={'非商业用途'}/>
        <NameValue
          name={'图片地址'}
          value={<input defaultValue={Img.cdnSrc(imageSrc, IMAGE_SIZES.ORIGIN)}/>}
        />
      </div>
    )
    const voteDownActive = indexOf(voteDownImageIds, imageId) !== -1
    const voteUpActive = indexOf(voteUpImageIds, imageId) !== -1
    const {voteDown, voteUp, favorited} = image
    const {imageVoteLoading} = this.state
    return (
      <div style={{
        textAlign: 'left',
        position: 'absolute',
        top: 0,
        left: '0%',
        right: '0%',
      }}>
        <DownloadButton
          image={image}
          changeHasDisplayedModal={this.changeHasDisplayedModal.bind(this)}
        />
        <FavoriteButton
          imageId={imageId}
          favorited={favorited}
          authId={authId}
          changeHasDisplayedModal={this.changeHasDisplayedModal.bind(this)}
        />
        <CollectButton
          imageId={imageId}
          authId={authId}
          changeHasDisplayedModal={this.changeHasDisplayedModal.bind(this)}
        />
        {albumButtons}
        <InfoButton
          content={infoContent}
          trigger={'click'}
        />
        <VoteUpButton
          step={upStep}
          loading={imageVoteLoading}
          imageId={imageId}
          active={voteUpActive}
          vote={voteUp}
          onChange={this.onChangeImageVote.bind(this)}
          authId={authId}
          changeHasDisplayedModal={this.changeHasDisplayedModal.bind(this)}
        />
        <VoteDownButton
          step={downStep}
          loading={imageVoteLoading}
          imageId={imageId}
          active={voteDownActive}
          vote={voteDown}
          onChange={this.onChangeImageVote.bind(this)}
          authId={authId}
          changeHasDisplayedModal={this.changeHasDisplayedModal.bind(this)}
        />
      </div>
    )
  }

  onChangeImageVote(imageId: number, vote: number, direction: Direction) {
    const {
      removeVoteImage,
      appendVoteUpImageIds,
      appendVoteDownImageIds,
      changeImageVoteUp,
      changeImageVoteDown,
      voteUpImageIds,
      voteDownImageIds,
    } = this.getProps

    this.setState({imageVoteLoading: true})
    const that = this

    const imageUp = () => {
      changeImageVoteUp(imageId, vote === 0 ? -defaultVoteStep : defaultVoteStep)
      // 取消对立投票
      if (indexOf(voteDownImageIds, imageId) !== -1) {
        changeImageVoteDown(imageId, -defaultVoteStep)
      }
    }

    const imageDown = () => {
      changeImageVoteDown(imageId, vote === 0 ? -defaultVoteStep : defaultVoteStep)
      // 取消对立投票
      if (indexOf(voteUpImageIds, imageId) !== -1) {
        changeImageVoteUp(imageId, -defaultVoteStep)
      }
    }

    updateImageVote(imageId, vote)
      .then(() => {
        // 修改数字需要在修改vote id array 之前
        if (direction === Direction.UP) {
          imageUp()
        } else if (direction === Direction.DOWN) {
          imageDown()
        }

        if (vote === 0) {
          removeVoteImage(imageId)
        } else if (vote > 0) {
          appendVoteUpImageIds([imageId])
        } else {
          appendVoteDownImageIds([imageId])
        }
        that.setState({imageVoteLoading: false})
        success()
      })
      .catch(() => {
        that.setState({imageVoteLoading: false})
        error()
      })
  }

  changeButtonsVisible(visible: boolean) {
    if (this.state.displayedModals.length > 0 && !visible) {
      return
    }

    this.setState({buttonsVisible: visible})
  }


  saveImageName(e) {
    this.setState({editingName: false})
    const freshName = e
    if (freshName.trim() === this.props.image.name.trim()) {
      return
    }

    updateImageName(this.props.image.id, freshName)
      .then(() => {
        success(lang.request_success_waiting_review)
      })
      .catch(() => {
        error()
      })
  }

  changeEditingImageNameState(show) {
    this.setState({editingName: show})
  }

  onEditImageNameClick() {
    if (!this.getProps.auth.id) {
      this.changeAuthVisible(true)
      return
    }

    this.changeEditingImageNameState(true)
  }

  ImageNameAndTags() {
    if (!this.state.buttonsVisible) {
      return null
    }
    const {image, auth} = this.getProps
    const {editingName} = this.state
    //  不停的hover 取消hover 导致闪烁,console即可看到效果

    const myScore = this.getProps.auth.score
    const canIUpdateImageName = myScore >= SCORES.UPDATE_IMAGE_NAME
    const canICreateImageTag = myScore >= SCORES.CREATE_IMAGE_TAG
    const canIRemoveImageTag = myScore >= SCORES.REMOVE_IMAGE_TAG

    const element = canIUpdateImageName
      ? <span title="单击编辑" onClick={this.onEditImageNameClick.bind(this)}>{image.name}</span>
      : <span>{image.name}</span>
    const editBtn = canIUpdateImageName ?
      <Icon title={'单击编辑'} type="edit" onClick={this.onEditImageNameClick.bind(this)}/> : null
    const editingBtn = (
      <ButtonGroup>
        <Button icon="check" title="保存" size="small" onClick={() => this.saveImageName.bind(this)(this.state.name)}/>
        <Button icon="close" title="取消" size="small" onClick={() => this.changeEditingImageNameState(false)}/>
      </ButtonGroup>
    )

    return (
      <div className="image-bottom-container" style={{
        position: 'absolute',
        bottom: 0,
        color: 'white',
        background: 'rgba(119, 118, 118, 0.5)',
        width: '100%',
        textAlign: 'left',
        padding: '4px 1em',
      }}>
        <div className={'image-name'}>
          <EditableText
            element={element}
            editBtn={editBtn}
            editingBtn={editingBtn}
            editing={editingName}
            onChange={e => this.setState({name: e})}
            text={image.name}
            containerStyle={{justifyContent: 'left'}}
          />
        </div>
        <div>
          {image.tagsList.map((tag, key) => {
            return <ImageTag
              tag={tag}
              authId={auth.id}
              imageId={image.id}
              key={key}
              removeButtonVisible={canIRemoveImageTag}
              changeHasDisplayedModal={this.changeHasDisplayedModal.bind(this)}
            />
          })}
          {canICreateImageTag ? <AddImageTag
            authId={auth.id}
            imageId={image.id}
            changeHasDisplayedModal={this.changeHasDisplayedModal.bind(this)}/> : null}
        </div>

      </div>
    )
  }

  render() {
    return (
      <div className={'image-card'}>
        <div
          style={{position: 'relative', textAlign: 'center'}}
          onMouseOver={this.changeButtonsVisible.bind(this, true)}
          onMouseLeave={this.changeButtonsVisible.bind(this, false)}
        >
          {this.Image()}
          {this.Buttons()}
          {this.ZoomModal()}
          {this.ImageNameAndTags()}
          <AuthModal
            visible={this.state.authVisible}
            hide={this.changeAuthVisible.bind(this, false)}
          />
        </div>
        <style jsx global>{`
            .image-card .image-name .editable-text-input{
              padding:0 4px;
              min-height:0;
            }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
    voteUpImageIds: state.auth.voteUpImageIds,
    voteDownImageIds: state.auth.voteDownImageIds,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appendVoteUpImageIds: (ids: number[]) => dispatch(appendVoteUpImageIds(ids)),
    appendVoteDownImageIds: (ids: number[]) => dispatch(appendVoteDownImageIds(ids)),
    removeVoteImage: (imageId: number) => dispatch(removeVoteImage(imageId)),
    changeImageVoteUp: (imageId: number, step: number) => dispatch(changeImageVoteUp(imageId, step)),
    changeImageVoteDown: (imageId: number, step: number) => dispatch(changeImageVoteDown(imageId, step)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard)


// // FIXME 添加loading动画后,zoom状态按左右键切换图片失败
// // if (inZoomModal) {
// //   console.log('inZoomModal')
// //   return <ImgWithLoading
// //     src={imageSrc}
// //     alt={this.alt}
// //     style={{maxWidth: '100%', cursor: inZoomModal ? 'zoom-out' : 'zoom-in'}}
// //     onClick={this.onClickImage.bind(this, true)}
// //     size={inZoomModal ? IMAGE_SIZES.ORDINARY : IMAGE_SIZES.SMALL}
// //   />
// // }