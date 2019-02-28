import * as React from 'react'
import {CSSProperties} from 'react'
import {CDN, IMAGE_SIZES} from '../../constants/conf'

interface Props {
  src: string
  alt?: string
  onClick?: (...argArray: any[]) => void
  style?: CSSProperties
  size?: string
  title?: string
}

class Img extends React.PureComponent<Props> {
  static cdnSrc(src: string, size?: string) {
    return CDN + src + (size || IMAGE_SIZES.SMALL)
  }

  render() {
    const {src, alt, style, size, title, onClick} = this.props
    const cdnSrc = Img.cdnSrc(src, size)
    return <img src={cdnSrc} alt={alt || src} title={title || ''} style={style} onClick={onClick}/>
  }
}

export default Img