import * as React from 'react'
import {CDN, IMAGE_LOADING, IMAGE_SIZES} from '../../constants/conf'
import {CSSProperties} from 'react'

const isNode = require('detect-node')

interface Props {
  src: string
  alt?: string
  onClick?: (...argArray: any[]) => void
  style?: CSSProperties
  size?: string
}

export default class extends React.PureComponent<Props> {

  state = {
    src: IMAGE_LOADING
  }

  componentDidMount() {
    const that = this
    const {src, size} = this.props
    const cdnSrc = CDN + src + (size || IMAGE_SIZES.SMALL)

    if (isNode) {
      that.setState({src: cdnSrc})
      return
    }

    const image = new Image()
    image.src = cdnSrc
    if (image.complete) {
      that.setState({src: cdnSrc})
      return
    }
    image.onload = function () {
      that.setState({src: cdnSrc})
    }
  }

  render() {
    const {alt, style, onClick} = this.props
    const {src} = this.state
    return <img src={src} alt={alt || ''} style={style} onClick={onClick}/>
  }
}