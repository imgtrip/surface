import * as React from 'react'
import {lang} from '../../../constants/lang'
import Button from 'antd/lib/button/button'
import FormItem from 'antd/lib/form/FormItem'

interface Props {
  loading: boolean
  onClick: () => void
  text?: string
  disabled?: boolean
}


class SubmitButton extends React.Component<Props> {

  render() {
    const {loading, onClick, text, disabled} = this.props
    return (
      <FormItem style={{textAlign: 'center', height: 60, marginBottom: 0}}>
        <Button
          type="primary"
          onClick={onClick}
          htmlType="submit"
          loading={loading}
          disabled={disabled || false}
        >{text || lang.submit}</Button>
      </FormItem>
    )
  }
}

export default SubmitButton