import * as React from 'react'
import Row from 'antd/lib/grid/row'
import Col from 'antd/lib/grid/col'
import ImageCard from '../Cards/ImageCard'
import {Image} from '../../@types/data'


interface Props {
  images: Image[]
  authId: number
  index: number
  albumId?: number
  albumOwnerId?: number
  loadMore?: () => void
  onRemoveAlbumImageSuccess?: (imageId: number) => void
}

class ImageRow extends React.Component<Props> {

  get cols() {
    const {images, albumId, authId, albumOwnerId, onRemoveAlbumImageSuccess, index, loadMore} = this.props

    return images.map((image, key) => {
      return (
        <Col span={8} key={key}>
          <ImageCard
            albumOwnerId={albumOwnerId}
            albumId={albumId}
            image={image}
            authId={authId}
            index={index + key}
            loadMore={loadMore}
            onRemoveAlbumImageSuccess={onRemoveAlbumImageSuccess}
          />
        </Col>
      )
    })
  }

  render() {
    return <Row gutter={4} style={{margin: '4px 0'}}>{this.cols}</Row>
  }
}

export default ImageRow