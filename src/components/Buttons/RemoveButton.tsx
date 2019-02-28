import * as React from 'react'
import {Button} from 'antd'
import {deleteAlbumImage} from '../../api/image'
import {DeleteAlbumImageRes} from '../../../pb/imgtrip_pb'
import {error, success} from '../../lib/message'
import {lang} from '../../constants/lang'


interface Props {
  imageId: number
  albumId: number
  onSuccess?: (imageId: number) => void
}

class RemoveButton extends React.Component<Props> {

  clicked() {
    const {albumId, imageId, onSuccess} = this.props

    deleteAlbumImage(albumId, imageId)
      .then((res: DeleteAlbumImageRes) => {
        console.log(res)
        if (onSuccess) {
          onSuccess(imageId)
        }
        success()
      })
      .catch(() => {
        error()
      })
  }

  render() {
    return <Button onClick={this.clicked.bind(this)} icon={'delete'} title={lang.remove}/>
  }
}

export default RemoveButton
