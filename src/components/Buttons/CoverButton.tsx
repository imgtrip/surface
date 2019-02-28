import * as React from 'react'
import {updateAlbum} from '../../api/image'
import {UpdateAlbumReq} from '../../../pb/imgtrip_pb'
import {error, success} from '../../lib/message'
import Button from 'antd/lib/button/button'
import {lang} from '../../constants/lang'


interface Props {
  imageSrc: string
  albumId: number
}

class CoverButton extends React.Component<Props> {

  clicked() {
    const {albumId, imageSrc} = this.props
    const req = new UpdateAlbumReq()
    req.setCover(imageSrc)

    updateAlbum(albumId, req)
      .then(() => {
        success()
      })
      .catch((err) => {
        console.log(err)
        error()
      })
  }

  render() {
    return <Button onClick={this.clicked.bind(this)} title={lang.set_cover} icon={'skin'}/>
  }
}

export default CoverButton