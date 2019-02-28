import * as React from 'react'
import Modal from 'antd/lib/modal/Modal'
import ImageCard, {Props as ImageCardProps} from '../Cards/ImageCard'
import {BaseModalProps} from './base'
import {connect} from 'react-redux'
import {isArrowLeft, isArrowRight} from '../../lib/keyboard'
import {arrowSwitchableMessage} from '../../service/cookie'
import {Image} from '../../@types/data'
import {RootState} from '../../redux'

interface Props extends BaseModalProps, ImageCardProps {
}

interface InjectedProps extends Props {
  images: Image[]
  albumImages: Image[]
}

class ZoomModal extends React.Component<Props> {

  onKeyboardChange: () => void

  state = {
    image: {},
    index: 0,
  }

  constructor(props) {
    super(props)
    this.onKeyboardChange = this.onChange.bind(this)
    const {image, index} = props
    this.state = {image, index}
  }

  get getProps() {
    return this.props as InjectedProps
  }

  onChange(e) {
    const {keyCode} = e
    const {images, albumId, albumImages, loadMore} = this.getProps
    const theImages = albumId > 0 ? albumImages : images

    const {index} = this.state

    const that = this
    const startSwitch = (nextIndex: number) => {
      const nextImage = theImages[nextIndex]
      that.setState({image: nextImage, index: nextIndex})
    }
    if (isArrowRight(keyCode)) {
      const len = theImages.length
      if (len - index < 3) {
        loadMore()
      }

      if (len - index > 1) {
        startSwitch(index + 1)
      }
    } else if (isArrowLeft(keyCode)) {
      if (index > 0) {
        startSwitch(index - 1)
      }
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyboardChange, false)
    arrowSwitchableMessage()
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyboardChange, false)
  }


  render() {
    const {authId, albumId, visible, hide} = this.props
    const image = this.state.image as Image

    return (
      <Modal
        closable={false}
        visible={visible}
        footer={null}
        onCancel={hide.bind(this)}
        maskClosable={true}
        width={'auto'}
        style={{top: 0, minWidth: '960px', width: '100%'}}
        bodyStyle={{padding: 0}}
      >
        <ImageCard
          image={image}
          authId={authId}
          albumId={albumId}
          onClickImage={hide.bind(this)}
          inZoomModal={true}
        />
      </Modal>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    images: state.images.data,
    // album images 在redux中与images相同
    albumImages: state.images.data,
  }
}


export default connect(mapStateToProps)(ZoomModal)

