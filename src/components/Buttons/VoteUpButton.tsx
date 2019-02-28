import * as React from 'react'
import VoteBaseButton, {Direction} from './VoteBaseButton'


class VoteUpButton extends VoteBaseButton {
  activeIcon = 'like'
  inactiveIcon = 'like-o'
  title = '反馈内容优质'
  direction = Direction.UP
}

export default VoteUpButton
