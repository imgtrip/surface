import * as React from 'react'
import {Modals} from '../../@types/data'
import CollectModal from '../Modals/CollectModal'
import AuthModal from '../Modals/AuthModal'
import Button from 'antd/lib/button/button'
import {lang} from '../../constants/lang'

interface Props {
  authId: number
  imageId: number
  changeHasDisplayedModal: (name: Modals, status: boolean) => void
}

class CollectButton extends React.Component<Props> {
  state = {
    authVisible: false,
    collectVisible: false
  }

  changeAuthVisible(visible: boolean) {
    this.setState({authVisible: visible})
    this.props.changeHasDisplayedModal(Modals.AUTH, visible)
  }

  changeCollectVisible(visible: boolean) {
    this.setState({collectVisible: visible})
    this.props.changeHasDisplayedModal(Modals.COLLECT, visible)
  }

  clicked() {
    if (!this.props.authId) {
      this.changeAuthVisible(true)
      this.props.changeHasDisplayedModal(Modals.AUTH, true)
      return
    }
    this.props.changeHasDisplayedModal(Modals.COLLECT, true)
    this.changeCollectVisible(true)
  }

  render() {
    return (
      <span>
        <Button onClick={this.clicked.bind(this)} icon={'star-o'} title={lang.collect}/>
        <CollectModal
          imageId={this.props.imageId}
          visible={this.state.collectVisible}
          hide={this.changeCollectVisible.bind(this, false)}
        />
        <AuthModal
          visible={this.state.authVisible}
          hide={this.changeAuthVisible.bind(this, false)}
        />
      </span>
    )
  }
}

export default CollectButton
