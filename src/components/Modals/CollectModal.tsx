import * as React from 'react'
import Modal from 'antd/lib/modal/Modal'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import CollectSelectForm from '../Forms/CollectSelectForm'
import {RootState} from '../../redux'
import {appendToCreatedAlbum, SimpleAlbum} from '../../redux/auth'
import {connect} from 'react-redux'
import {BaseModalProps} from './base'
import CollectCreateForm from '../Forms/CollectCreateForm'

interface Props extends BaseModalProps {
  imageId: number
}

interface InjectedProps extends Props {
  authId: number
  albums: SimpleAlbum[]
  appendToCreatedAlbum: (album: SimpleAlbum) => void
}


class CollectModal extends React.Component<Props> {

  state = {
    visible: false
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

  onCreateFormSubmitted(album: SimpleAlbum) {
    this.getProps.appendToCreatedAlbum(album)
    this.ok()
  }

  onSelectFormSubmitted() {
    this.ok()
  }

  render() {
    const {albums, imageId, visible, authId} = this.getProps

    return (
      <Modal
        title={'收藏到新图集 & 已有图集'}
        visible={visible}
        onOk={this.ok.bind(this)}
        onCancel={this.cancel.bind(this)}
        width={960}
        footer={null}
      >
        <Row gutter={64}>
          <Col span={12} style={{borderRight:'1px solid #e8e8e8'}}>
            <CollectCreateForm
              authId={authId}
              imageId={imageId}
              onSubmitted={this.onCreateFormSubmitted.bind(this)}
            />
          </Col>
          <Col span={12}>
            <CollectSelectForm
              albums={albums}
              imageId={imageId}
              onSubmitted={this.onSelectFormSubmitted.bind(this)}
            />
          </Col>
        </Row>
      </Modal>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    albums: state.auth.albums,
    authId: state.auth.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    appendToCreatedAlbum: (album: SimpleAlbum) => (dispatch(appendToCreatedAlbum(album)))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CollectModal)







