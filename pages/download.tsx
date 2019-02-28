import * as React from 'react'
import {downloadImage} from '../src/api/image'
import {DownloadImageRes} from '../pb/imgtrip_pb'
import {setTokenHash} from '../src/service/token'
import {download, styleSelector} from '../src/service/oss'


class Download extends React.Component {

  static async getInitialProps(ctx) {
    const {token, req, res} = ctx
    setTokenHash(token)

    let canIDownload = false
    const id = req.query.id
    await downloadImage(id)
      .then(async (downloadImageRes: DownloadImageRes) => {
        canIDownload = downloadImageRes.toObject().status
      })
      .catch((err) => {
        res.status(500)
        res.end()
      })

    if (!canIDownload) {
      res.status(403)
      res.end()
      return
    }

    const image = req.query.image
    if (typeof image === 'undefined') {
      res.status(503)
      res.end()
      return
    }
    const height = req.query.height
    const width = req.query.width
    let downloadUrl = image
    if (typeof height === 'undefined' || typeof width === 'undefined') {
      downloadUrl = image
    } else {
      const style = styleSelector(height, width)
      if (typeof style === 'undefined') {
        // TODO 生成自定义尺寸
      } else {
        downloadUrl = image + '!' + style
      }
    }

    await download(downloadUrl, res)
  }

}

export default Download