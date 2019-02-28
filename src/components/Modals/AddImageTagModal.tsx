import * as React from 'react'
import Modal from 'antd/lib/modal/Modal'
import {BaseModalProps} from './base'
import {RootState} from '../../redux'
import {connect} from 'react-redux'
import AddImageTagForm from '../../components/Forms/AddImageTagForm'

interface Props extends BaseModalProps {
  imageId: number
}

interface InjectedProps extends Props {
  authId: number
}

class AddImageTagModal extends React.Component<Props> {

  state = {
    visible: false,
  }

  get getProps() {
    return this.props as InjectedProps
  }

  ok() {
    this.props.hide()
  }

  cancel() {
    this.props.hide()
  }

  render() {
    const {visible, authId, imageId} = this.getProps

    return (
      <Modal
        title={'为图像添加新标签'}
        visible={visible}
        onOk={this.ok.bind(this)}
        onCancel={this.cancel.bind(this)}
        footer={null}
      >
        <AddImageTagForm onSubmitted={this.ok.bind(this)} authId={authId} imageId={imageId}/>
      </Modal>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    authId: state.auth.id,
  }
}

const mapDispatchToProps = () => {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(AddImageTagModal)


