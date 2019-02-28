import * as React from 'react'
import Input from 'antd/lib/input/Input'
import Button from 'antd/lib/button/button'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import {VERIFICATION_CODE_RESEND_SECONDS} from '../../../constants/conf'
import {createVerificationEmail} from '../../../api/user'
import {error} from '../../../lib/message'
import {GetFieldDecoratorOptions} from 'antd/lib/form/Form'
import Schema from 'async-validator'
import {Icon} from 'antd'
import {message as base} from 'antd'

const descriptor = {
  email: {type: 'email', required: true},
}
const validator = new Schema(descriptor)


interface Props {
  email: string
  getFieldDecorator: (id: string, options?: GetFieldDecoratorOptions) => (node: React.ReactNode) => React.ReactNode
  onSuccess: (message?: string) => void
  onError: (message?: string) => void
}

class VerificationCodeInput extends React.Component<Props> {

  state = {
    btnText: '发送验证码',
    counter: 0,
    btnDisabled: false,
    verificationCode: {
      validateStatus: undefined,
      help: '',
      value: undefined,
    },
  }

  countdown = 0

  constructor(props) {
    super(props)
    this.resetCounter()
  }

  resetCounter() {
    this.countdown = VERIFICATION_CODE_RESEND_SECONDS
  }

  resetBtn() {
    this.setState({btnDisabled: false, btnText: '发送验证码'})
  }


  timer() {
    this.setState({btnDisabled: true})
    const that = this
    let intervalId: NodeJS.Timer
    const changeTimerText = () => {
      that.setState({counter: this.countdown, btnText: '重新发送'})
    }

    changeTimerText()
    const loop = () => {
      that.countdown--
      changeTimerText()
      if (that.countdown <= 0) {
        clearInterval(intervalId)
        this.resetCounter()
        this.resetBtn()
      }
    }

    intervalId = setInterval(loop, 1000)
  }

  onBtnClick() {
    const that = this
    const {email, onError} = this.props

    validator.validate({email}, (errors, fields) => {
      if (errors) {
        onError('邮箱格式错误')
        return
      }
      createVerificationEmail(email)
        .then((res) => {
          that.timer()
          base.success('操作成功。正常情况下邮件将于3秒内送达，若长时间未收到，请： 1.核对邮箱是否输入有误 2.检查垃圾邮件列表', 30)
        })
        .catch((err) => {
          switch (err.code) {
            case 7:
              error('操作失败,请求过于频繁')
              return
          }
          error()
        })
    })
  }


  render() {
    const {counter, btnText, btnDisabled} = this.state
    const {getFieldDecorator} = this.props
    // {
    //   rules: [{required: true, message: lang.verification_code_illegal}],
    // }
    return (
      <Row gutter={8}>
        <Col span={15}>
          {getFieldDecorator('verification_code')(
            <Input prefix={<Icon type="safety"/>}/>,
          )}
        </Col>
        <Col span={8}>
          <Button disabled={btnDisabled} onClick={this.onBtnClick.bind(this)}>
            {counter === 0 ? null : counter + ' '}{btnText}
          </Button>
        </Col>
      </Row>
    )
  }
}

export default VerificationCodeInput
