import * as React from 'react'
import {setTokenHash} from '../../src/service/token'
import {getPage, pages} from '../../src/service/paginate'
import {images} from '../../src/api/image'
import {PER_MAP_PAGE, PER_PAGE} from '../../src/constants/conf'
import {ImagesRes} from '../../pb/imgtrip_pb'
import BaseMap from '../../src/components/HOC/BaseMap'
import {HOME} from '../../src/constants/seo'
import {sitemaps} from '../../src/service/link'


interface Props {
  pages: number[]
  total: number
  page: number
}

const link = page => `/?random=0&page=${page}`
const mapLink = page => sitemaps.images + `?page=${page}`

class Images extends React.Component<Props> {

  static async getInitialProps({token, req}) {
    setTokenHash(token)
    const page = getPage(req)

    let total = 0
    await images(1, PER_PAGE, false, true)
      .then((res: ImagesRes) => {
        total = res.toObject().total
      })
      .catch(() => {
      })

    return {pages: pages(page, PER_PAGE, total, PER_MAP_PAGE), total, page}
  }

  render() {
    return <BaseMap {...this.props} link={link} mapLink={mapLink} title={'图片'}/>
  }
}

export default Images