import * as React from 'react'
import VoteBaseButton, {Direction} from './VoteBaseButton'


class VoteDownButton extends VoteBaseButton {
  activeIcon = 'dislike'
  inactiveIcon = 'dislike-o'
  title = '反馈内容低劣'
  direction = Direction.DOWN
}

export default VoteDownButton
