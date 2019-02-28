import * as React from 'react'
import {Button} from 'antd'
import AuthModal from '../Modals/AuthModal'
import {Modals} from '../../@types/data'

export enum Direction {
  UP = 'UP',
  DOWN = 'DOWN'
}

interface Props {
  authId: number
  imageId: number
  step: number
  vote: number
  active: boolean
  loading: boolean
  onChange: (imageId: number, vote: number, direction: Direction) => void
  changeHasDisplayedModal: (name: Modals, status: boolean) => void
}

class VoteBaseButton extends React.Component<Props> {

  state = {
    authVisible: false
  }

  title = ''
  activeIcon = ''
  inactiveIcon = ''
  direction: Direction

  onClick() {
    const {authId, loading, imageId, onChange, active, step} = this.props
    if (authId === 0) {
      this.changeAuthVisible(true)
      return
    }
    if (loading) {
      return
    }
    onChange(imageId, active ? 0 : step, this.direction)
  }

  changeAuthVisible(visible: boolean) {
    this.setState({authVisible: visible})
    this.props.changeHasDisplayedModal(Modals.AUTH, visible)
  }

  render() {
    const {vote, active, loading} = this.props
    return (
      <span>
        <Button
          icon={active ? this.activeIcon : this.inactiveIcon}
          title={this.title}
          type={active ? 'danger' : 'default'}
          onClick={this.onClick.bind(this)}
          loading={loading}
        >
          {vote === 0 ? '' : vote}
        </Button>
        <AuthModal
          visible={this.state.authVisible}
          hide={this.changeAuthVisible.bind(this, false)}
        />
      </span>
    )
  }
}

export default VoteBaseButton
