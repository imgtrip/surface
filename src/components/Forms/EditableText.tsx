import * as React from 'react'
import {CSSProperties} from 'react'
import TextArea from 'antd/lib/input/TextArea'

interface Props {
  text: string | number
  element: string | number | React.ReactNode,
  editBtn?: string | number | React.ReactNode | null,
  editingBtn?: string | number | React.ReactNode | null,
  inputStyle?: CSSProperties
  inputContainerStyle?: CSSProperties
  editing: boolean,
  onBlur?: (s: string) => void
  onChange?: (s: string) => void
  containerStyle?: CSSProperties
}

export default class extends React.Component<Props> {

  onChange(e) {
    if (this.props.onChange) {
      this.props.onChange(e.target.value)
    }
  }

  onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e)
    }
  }

  input() {
    const {text, inputStyle, inputContainerStyle} = this.props

    return (
      <div style={{width: '80%', marginRight: '4px', ...inputContainerStyle}}>
        <TextArea
          className={'editable-text-input'}
          defaultValue={text.toString()}
          style={inputStyle}
          onChange={this.onChange.bind(this)}
          onBlur={this.onBlur.bind(this)}
          autosize
          autoFocus
        />
      </div>
    )
  }

  render() {
    const {editing, element, editBtn, editingBtn, containerStyle} = this.props

    if (editing) {
      return (
        <div className="editable-text-input" style={{
          display: 'flex',
          ...containerStyle,
        }}>
          {this.input()}
          {editingBtn}
        </div>
      )
    }

    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...containerStyle,
      }}>
        {element}
        {editBtn}
      </div>
    )
  }
}