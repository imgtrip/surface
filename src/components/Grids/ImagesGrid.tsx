import * as React from 'react'
import ImageRow from './ImageRow'
import {chunk} from 'lodash'
import {Image} from '../../@types/data'

interface Props {
  authId: number
  images: Image[]
  albumId?: number
  columns?: number
  loadMore?: () => void
  albumOwnerId?: number
  onRemoveAlbumImageSuccess?: (imageId: number) => void
}

class ImagesGrid extends React.Component<Props> {

  render() {
    const {images, albumId, authId, columns, albumOwnerId, loadMore, onRemoveAlbumImageSuccess} = this.props
    return (
      <div>
        {
          chunk(images, columns || 3).map((imgChunk, key) => {
            return (
              <ImageRow
                key={key}
                index={key * 3}
                images={imgChunk}
                albumId={albumId}
                authId={authId}
                loadMore={loadMore}
                albumOwnerId={albumOwnerId}
                onRemoveAlbumImageSuccess={onRemoveAlbumImageSuccess}
              />
            )
          })
        }
      </div>
    )
  }
}


export default ImagesGrid
