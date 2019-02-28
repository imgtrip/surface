import * as React from 'react'
import {setTokenHash} from '../../src/service/token'
import {getPage, pages} from '../../src/service/paginate'
import {PER_MAP_PAGE, PER_PAGE} from '../../src/constants/conf'
import {AlbumsRes} from '../../pb/imgtrip_pb'
import BaseMap from '../../src/components/HOC/BaseMap'
import {albums as albumsApi} from '../../src/api/image'
import {albums} from '../../src/service/link'
import {ALBUMS} from '../../src/constants/seo'

interface Props {
  pages: number[]
  total: number
  page: number
}

const link = page => (albums + `?&page=${page}`)
const mapLink = page => `/maps/map-images?page=${page}`

class Albums extends React.Component<Props> {

  static async getInitialProps({token, req}) {
    setTokenHash(token)
    const page = getPage(req)

    let total = 0
    await albumsApi(1, PER_PAGE, true)
      .then((res: AlbumsRes) => {
        total = res.toObject().total
      })
      .catch(() => {
      })

    return {pages: pages(page, PER_PAGE, total, PER_MAP_PAGE), total, page}
  }

  render() {
    return <BaseMap {...this.props} link={link} mapLink={mapLink} title={ALBUMS.title}/>
  }
}

export default Albums