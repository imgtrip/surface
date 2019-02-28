import * as React from 'react'
import {Button} from 'antd'
import AuthModal from '../Modals/AuthModal'
import {Image, Modals} from '../../@types/data'
import DownloadModal from '../Modals/DoanloadModal'
import {AuthState} from '../../redux/auth'
import {RootState} from '../../redux'
import {connect} from 'react-redux'
import {SCORES} from '../../constants/conf'
import {error} from '../../lib/message'
import {lang} from '../../constants/lang'

interface Props {
  image: Image
  changeHasDisplayedModal: (m: Modals, status: boolean) => void
}

interface InjectedProps extends Props {
  auth: AuthState
}

class DownloadButton extends React.Component<Props> {

  state = {
    authVisible: false,
    downloadVisible: false,
  }

  get getProps() {
    return this.props as InjectedProps
  }

  changeAuthVisible(visible: boolean) {
    this.setState({authVisible: visible})
    this.props.changeHasDisplayedModal(Modals.AUTH, visible)
  }

  changeDownloadModalVisible(visible: boolean) {
    this.setState({downloadVisible: visible})
    this.props.changeHasDisplayedModal(Modals.DOWNLOAD, visible)
  }

  clicked() {
    const {auth} = this.getProps
    if (auth.id <= 0) {
      this.changeAuthVisible(true)
      return
    }

    this.changeDownloadModalVisible(true)
  }

  render() {
    const {authVisible, downloadVisible} = this.state
    const {image} = this.getProps

    return (
      <span>
        <Button title="无水印原图下载" onClick={this.clicked.bind(this)} icon={'download'}>无水印下载</Button>
        <AuthModal
          visible={authVisible}
          hide={this.changeAuthVisible.bind(this, false)}
        />
        <DownloadModal
          image={image}
          visible={downloadVisible}
          hide={this.changeDownloadModalVisible.bind(this, false)}
        />
      </span>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps)(DownloadButton)
