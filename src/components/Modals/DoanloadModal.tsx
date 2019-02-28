import * as React from 'react'
import {Col, Modal, Row} from 'antd'
import {BaseModalProps} from './base'
import OptionalDownloadForm from '../Forms/OptionalDownloadForm'
import {createDownloadLog} from '../../api/log'
import {Image} from '../../@types/data'
import {RootState} from '../../redux'
import {AuthState, updateScore} from '../../redux/auth'
import {connect} from 'react-redux'
import {SCORES} from '../../constants/conf'


interface Props extends BaseModalProps {
  image: Image
}

interface InjectedProps extends Props {
  auth: AuthState
  updateScore: (data: number) => void
}

class DownloadModal extends React.Component<Props> {

  get getProps() {
    return this.props as InjectedProps
  }

  startDownload(auto: boolean, height?: number, width?: number) {
    const {hide, image, auth, updateScore} = this.getProps
    createDownloadLog(image.id)
    updateScore(auth.score - SCORES.DOWNLOAD_IMAGE)
    hide()

    // if (!auto && (height <= 0 || width <= 0)) {
    //   error('下载尺寸非法')
    //   return
    // }
    // // const {image, imageId} = this.props
    //
    // const image = '2559b11d/18a651e698a54714db81b373edbd6e2b.jpg!small'
    //
    // let url = ''
    // if (auto) {
    //   url = download(image)
    // } else {
    //   url = download(image, height, width)
    // }
  }


  render() {
    const {visible, hide, image} = this.props
    return (
      <Modal
        closable={true}
        visible={visible}
        footer={null}
        onCancel={hide.bind(this)}
        maskClosable={true}
      >
        <Row>
          <Col span={20} offset={2}>
            <OptionalDownloadForm image={image} onSubmitted={this.startDownload.bind(this)}/>
          </Col>
        </Row>
      </Modal>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateScore: (data: number) => dispatch(updateScore(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadModal)
