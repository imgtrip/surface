import * as React from 'react'
import {Icon, message} from 'antd'
import {REMOVE_TAG_TIMER_SECONDS} from '../../constants/conf'
import {lang} from '../../constants/lang'
import Button from 'antd/lib/button/button'
import {deleteImageTag, updateImageTagVote as updateImageTagVoteApi} from '../../api/image'
import {ImageTag as ImageTagType, Modals} from '../../@types/data'
import {error, info, success} from '../../lib/message'
import {connect} from 'react-redux'
import {updateImageTagVote} from '../../redux/images'
import {Code} from 'grpc-web-client/dist/Code'
import {ServiceError} from '../../../pb/imgtrip_pb_service'
import AuthModal from '../Modals/AuthModal'

interface Props {
  tag: ImageTagType
  imageId: number
  removeButtonVisible: boolean
  changeHasDisplayedModal: (name: Modals, status: boolean) => void
  authId: number
}

interface InjectedProps extends Props {
  updateImageTagVote: (imageId: number, tagId: number) => void
}


class ImageTag extends React.Component<Props> {
  state = {
    checked: false,
    clickLoading: false,
    authVisible: false,
  }
  timers = []

  constructor(props) {
    super(props)
    this.state.checked = props.tag.isVoted
  }

  get getProps() {
    return this.props as InjectedProps
  }

  cancelRemoveTag(imageId, tagId) {
    clearTimeout(this.timers[this.toTimerId(imageId, tagId)])
    setTimeout(() => {
      // WARNING 当页面存在多个message时会被全部清空
      message.destroy()
    }, 400)
  }

  toTimerId(imageId, tagId) {
    return `${imageId}_${tagId}`
  }

  onRemoveClick(imageId, tagId, e) {
    e.preventDefault()
    this.timers[this.toTimerId(imageId, tagId)] = setTimeout(() => {
      deleteImageTag(imageId, tagId)
        .then(() => {
          //  隐藏tag?
          success()
        })
        .catch((err: ServiceError) => {
          switch (err.code) {
            case Code.AlreadyExists:
              info('该反馈已存在，正在审核中')
              return
          }
          error()
        })
    }, REMOVE_TAG_TIMER_SECONDS * 1000)

    message.success(<span>
        <span>{lang.will_remove_tag_soon}</span>
        <Button size={'small'} onClick={this.cancelRemoveTag.bind(this, imageId, tagId)}
                style={{marginLeft: '1em'}}>{lang.revert}</Button>
      </span>,
      REMOVE_TAG_TIMER_SECONDS,
    )
  }

  onClick() {
    if (this.state.clickLoading) {
      return
    }
    if (!this.getProps.authId) {
      this.changeAuthVisible(true)
      return
    }

    const that = this
    const {id, isVoted} = this.props.tag
    const imageId = this.props.imageId

    updateImageTagVoteApi(imageId, id, Number(!isVoted))
      .then(() => {
        that.setState({checked: !isVoted})
        that.getProps.updateImageTagVote(imageId, id)
      })
      .catch(() => {
        error()
      })
  }

  removeButton() {
    if (this.state.checked || !this.props.removeButtonVisible) {
      return null
    }
    const {imageId, tag} = this.props
    return (
      <span
        className={'remove'}
        onClick={this.onRemoveClick.bind(this, imageId, tag.id)}
        title="删除标签"
      >
          <Icon type="close"/>
      </span>
    )
  }

  changeAuthVisible(visible: boolean) {
    this.setState({authVisible: visible})
    this.props.changeHasDisplayedModal(Modals.AUTH, visible)
  }


  render() {
    const {tag} = this.props
    const {authVisible} = this.state
    return (
      <span className={`${this.state.checked ? 'tag-container-checked' : '' } tag-container`}>
         <span title={this.state.checked ? '取消赞同该标签' : '赞同该标签'}
               className={this.state.checked ? 'tag-name-checked' : 'tag-name'}
               onClick={this.onClick.bind(this)}>{tag.name}</span>
        {this.removeButton()}

        <AuthModal
          visible={authVisible}
          hide={this.changeAuthVisible.bind(this, false)}
        />

        <style jsx>{`
          .tag-container{
            padding: 0 2px;
            border-radius: 4px;
            background-color: #ffffff36;
            color: rgba(255, 255, 255, 0.8);
            margin:0 2px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -khtml-user-select: none;
            -ms-user-select: none;
          }

          .tag-container:hover{
            background-color: black;
            color:white;
          }
          .tag-name,.remove{
            cursor: pointer;
            padding: 0 5px;
          }
          .tag-name:hover{
            color:white;
          }

          .tag-container-checked{
             background-color:rgb(255, 85, 0) !important;
             color:white !important;
          }
          .tag-container-checked:hover{
           opacity: .85;
          }
          .tag-name-checked{
            cursor: pointer;
            padding: 0 5px;
          }

          .remove{
              border-left: 1px dashed #e0dfdf;
          }
          .remove:hover{
            color:red;
          }
        `}</style>
      </span>
    )
  }
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateImageTagVote: (imageId: number, tagId: number) => dispatch(updateImageTagVote(imageId, tagId)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageTag)