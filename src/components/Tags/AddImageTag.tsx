import * as React from 'react'
import {Icon} from 'antd'
import AddImageTagModal from '../Modals/AddImageTagModal'
import {Modals} from '../../@types/data'
import AuthModal from '../Modals/AuthModal'

interface Props {
  imageId: number
  authId: number
  changeHasDisplayedModal: (name: Modals, status: boolean) => void
}

class AddImageTag extends React.Component<Props> {

  state = {
    modalVisible: false,
    authVisible: false,
  }

  changeAuthVisible(visible: boolean) {
    this.setState({authVisible: visible})
    this.props.changeHasDisplayedModal(Modals.AUTH, visible)
  }


  onClick() {
    if (!this.props.authId) {
      this.changeAuthVisible(true)
      return
    }

    this.setState({modalVisible: true})
    this.props.changeHasDisplayedModal(Modals.CREATE_IMAGE_TAG, true)
  }

  hide() {
    this.setState({modalVisible: false})
    this.props.changeHasDisplayedModal(Modals.CREATE_IMAGE_TAG, false)
  }

  render() {
    const {modalVisible, authVisible} = this.state
    const {imageId} = this.props

    return (
      <span>
      <span className="tag-container" onClick={this.onClick.bind(this)} title={'添加标签'}>
        <style jsx>{`
        .tag-container{
            padding: 0 4px;
            border-radius: 4px;
            background-color: #ffffff36;
            color: rgba(255, 255, 255, 0.8);
            margin:0 2px;
            cursor: pointer;
          }

          .tag-container:hover{
            background-color: black !important;
            color:white !important;
          }
        `}</style>
        <Icon type="plus" style={{color: 'white'}}/>
      </span>
      <AddImageTagModal imageId={imageId} visible={modalVisible} hide={this.hide.bind(this)}/>
       <AuthModal
         visible={authVisible}
         hide={this.changeAuthVisible.bind(this, false)}
       />
      </span>
    )
  }
}

export default AddImageTag