import * as React from 'react'
import Layout from '../src/components/Layouts/Layout'
import ImagesGrid from '../src/components/Grids/ImagesGrid'
import {RootState} from '../src/redux'
import {connect} from 'react-redux'
import {Album, Image, ImageVote, User} from '../src/@types/data'
import Loading from '../src/components/Widgets/Loading'
import OptionalTags from '../src/components/Tags/OptionalTags'
import EditableText from '../src/components/Forms/EditableText'
import Icon from 'antd/lib/icon'
import {albumImages, showAlbum, updateAlbum} from '../src/api/image'
import {
  AlbumImagesRes,
  ShowAlbumRes,
  ShowUserRes,
  UpdateAlbumReq,
} from '../pb/imgtrip_pb'
import {error, success} from '../src/lib/message'
import {showUser} from '../src/api/user'
import {setTokenHash} from '../src/service/token'
import {PER_PAGE, SITE_NAME, VISITOR_MAX_VIEW_ALBUM_IMAGE_PAGE} from '../src/constants/conf'
import CommentsWithFormCard from '../src/components/Cards/CommentsWithFormCard'
import Empty from '../src/components/Widgets/Empty'
import {
  saveTitle,
  setAlbum,
  setAlbumUser, updateDescription,
} from '../src/redux/album'
import LoginToContinue from '../src/components/Widgets/LoginToContinue'
import {AuthState} from '../src/redux/auth'
import {appendImages, removeImage} from '../src/redux/images'
import InfiniteScroll from '../src/components/HOC/InfiniteScroll'
import {getPage} from '../src/service/paginate'
import {println} from '../src/service/system'
import {ALBUMS} from '../src/constants/seo'
import Metas from '../src/components/Widgets/Metas'


interface Props {
  page: number
}

interface InjectedProps extends Props {
  auth: AuthState
  album: Album
  albumUser: User
  images: Image[]
  appendImages: (images: Image[]) => void
  removeImage: (imageId: number) => void
  saveTitle: (title: string) => void,
  updateDescription: (description: string) => void,
  setImageVotes: (imageVotes: ImageVote[]) => void
}


class AlbumShow extends React.Component<Props> {

  static async getInitialProps({reduxStore, req, token}) {
    setTokenHash(token)
    const {id} = req.params
    const page = getPage(req)

    await showAlbum(id)
      .then(async (showAlbumRes: ShowAlbumRes) => {
        const album = showAlbumRes.toObject().album
        reduxStore.dispatch(setAlbum(album))

        await albumImages(album.id, page, PER_PAGE, true)
          .then((albumImagesRes: AlbumImagesRes) => {
            reduxStore.dispatch(appendImages(albumImagesRes.toObject().itemsList))
          })

        await showUser(album.userId).then((res: ShowUserRes) => {
          reduxStore.dispatch(setAlbumUser(res.toObject().user))
        })
      })
      .catch((err) => {
        println(err)
      })

    return {page}
  }

  state = {
    comments: [],
    editingTitle: false,
    editingDescription: false,
    commentsLoading: true,
    loginToContinueVisible: false,
  }
  page = 0

  constructor(props) {
    super(props)
    this.page = props.page
  }

  get getProps() {
    return this.props as InjectedProps
  }

  changeTitleEditable(editingTitle: boolean) {
    this.setState({editingTitle})
  }

  saveTitle(arg) {
    const albumId = this.getProps.album.id
    const title = arg.target.value
    const req = new UpdateAlbumReq()
    req.setTitle(title)
    const that = this
    updateAlbum(albumId, req)
      .then(() => {
        that.changeTitleEditable(false)
        that.getProps.saveTitle(title)
        success()
      })
      .catch(() => {
        that.changeTitleEditable(false)
        error()
      })
  }

  saveDescription(arg) {
    const albumId = this.getProps.album.id
    const description = arg.target.value
    const req = new UpdateAlbumReq()
    req.setDescription(description)
    const that = this
    updateAlbum(albumId, req)
      .then(() => {
        that.changeDescriptionEditable(false)
        that.getProps.updateDescription(description)
        success()
      })
      .catch(() => {
        that.changeDescriptionEditable(false)
        error()
      })
  }


  title() {
    const {title, userId} = this.getProps.album
    const {id} = this.getProps.auth
    const {editingTitle} = this.state
    const element = (
      <h1>
        {title}
        {
          userId === id && userId > 0 ?
            <Icon
              title={'编辑'}
              type="edit"
              onClick={this.changeTitleEditable.bind(this, true)}
              style={{fontSize: '18px', marginLeft: '12px', color: '#007bff', cursor: 'pointer'}}
            /> : null
        }
      </h1>
    )

    return (
      <EditableText
        element={element}
        editing={editingTitle}
        text={title}
        onBlur={this.saveTitle.bind(this)}
        inputContainerStyle={{textAlign: 'center', margin: '10px 0', width: '100%'}}
        inputStyle={{
          fontWeight: 500,
          fontSize: '2em',
          textAlign: 'center',
          padding: 0,
        }}
      />
    )
  }

  changeDescriptionEditable(editingDescription: boolean) {
    this.setState({editingDescription})
  }

  description() {
    const {description, userId} = this.getProps.album
    const {id} = this.getProps.auth
    const {editingDescription} = this.state
    const element = (
      <p>
        {description}
        {
          userId === id && userId > 0 ?
            <Icon
              title={'编辑'}
              type="edit"
              onClick={this.changeDescriptionEditable.bind(this, true)}
              style={{fontSize: '18px', marginLeft: '12px', color: '#007bff', cursor: 'pointer'}}
            /> : null
        }
      </p>
    )

    return (
      <EditableText
        element={element}
        editing={editingDescription}
        text={description}
        onBlur={this.saveDescription.bind(this)}
        inputContainerStyle={{margin: '10px 0'}}
        inputStyle={{padding: '0.71em'}}
      />
    )
  }

  requireLoginToContinue() {
    const {auth} = this.getProps
    const authId = auth.id
    const require = !authId && this.page > VISITOR_MAX_VIEW_ALBUM_IMAGE_PAGE
    if (require) {
      this.setState({loginToContinueVisible: true})
    }
    return require
  }

  loadMoreImages(page) {
    if (this.requireLoginToContinue()) {
      return new Promise(resolve => resolve())
    }

    const that = this
    return new Promise((resolve, reject) => {
      albumImages(this.getProps.album.id, page)
        .then((res: AlbumImagesRes) => {
          const images = res.toObject().itemsList
          that.getProps.appendImages(images)
          that.page++
          console.log(res.toObject().total)
          resolve({data: images, total: res.toObject().total})
        })
        .catch((error) => {
          reject({error})
        })
    })
  }


  imagesContent() {
    const {auth, album} = this.getProps
    const authId = auth.id
    const albumOwnerId = album.userId

    return (images, loading) => {
      return (<React.Fragment>
          {
            images.length === 0
              ? <Empty/>
              : <ImagesGrid
                albumId={album.id}
                columns={3}
                authId={authId}
                images={images}
                loadMore={this.loadMoreImages.bind(this)}
                albumOwnerId={albumOwnerId}
                onRemoveAlbumImageSuccess={this.onRemoveAlbumImageSuccess.bind(this)}
              />
          }
          {loading ? <Loading/> : null}
        </React.Fragment>
      )
    }
  }

  images() {
    const {images} = this.getProps

    return <InfiniteScroll
      perPage={PER_PAGE}
      initPage={this.page}
      initData={images}
      loadMore={this.loadMoreImages.bind(this)}
    >{this.imagesContent()}</InfiniteScroll>
  }

  onRemoveAlbumImageSuccess(imageId: number) {
    this.getProps.removeImage(imageId)
  }

  render() {
    const {auth, albumUser, album} = this.getProps
    const authId = auth.id
    const commentHostId = album.commentHostId
    const {title} = album

    return (
      <Layout shadow>
        {title ? <Metas metas={{
          title: `${title} - ${SITE_NAME}`,
          description: title,
          keywords: title,
        }}/> : null}
        <div style={{textAlign: 'center', marginBottom: 20}}>
          {this.title()}
          <div style={{color: 'darkgrey'}}>
            <OptionalTags
              data={album}
              user={albumUser}
              linkable
              tags={['user', 'views', 'amounts', 'comments', 'createdAt']}
            />
          </div>
        </div>
        <div style={{marginBottom: 20}}>
          {this.description()}
        </div>
        <div style={{marginBottom: 20}}>
          {this.images()}
        </div>
        <CommentsWithFormCard
          authId={authId}
          commentHostId={commentHostId}
        />
        {authId ? null : <LoginToContinue visible={this.state.loginToContinueVisible}/>}
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
    album: state.album.data,
    images: state.images.data,
    albumUser: state.album.data.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appendImages: (images: Image[]) => dispatch(appendImages(images)),
    removeImage: (imageId: number) => dispatch(removeImage(imageId)),
    saveTitle: (title: string) => dispatch(saveTitle(title)),
    updateDescription: (description: string) => dispatch(updateDescription(description)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumShow)
