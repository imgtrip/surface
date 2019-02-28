import * as React from 'react'
import {Button, Popover} from 'antd'
import {TooltipTrigger} from 'antd/lib/tooltip'

interface Props {
  title?: React.ReactNode
  content?: React.ReactNode
  trigger?: TooltipTrigger
}

class InfoButton extends React.Component<Props> {

  render() {
    const {title, content, trigger} = this.props
    return (
      <span>
        <Popover placement="bottomLeft" title={title} content={content} trigger={trigger || 'hover'}>
          <Button icon={'info'} title={'图像信息'}/>
        </Popover>
      </span>
    )
  }
}

export default InfoButton
