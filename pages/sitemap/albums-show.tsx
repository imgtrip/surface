import * as React from 'react'
import {Album} from '../../src/@types/data'
import {PER_PAGE} from '../../src/constants/conf'
import {setTokenHash} from '../../src/service/token'
import {albums as albumsApi} from '../../src/api/image'
import {AlbumsRes} from '../../pb/imgtrip_pb'
import {getPage, nextPage, previousPage} from '../../src/service/paginate'
import Layout from '../../src/components/Layouts/Layout'
import {sitemaps} from '../../src/service/link'
import BodyCard from '../../src/components/Cards/ShadowCard'
import SimplePaginate from '../../src/components/Widgets/SimplePaginate'

interface Props {
  albums: Album[]
  total: number
  page: number
}

const mapLink = (page) => sitemaps.albumsShow + `?page=${page}`

class AlbumsShow extends React.Component<Props> {

  static async getInitialProps({token, req}) {
    setTokenHash(token)
    let albums: Album[]
    let total: number

    const page = getPage(req)

    await albumsApi(page, PER_PAGE, true)
      .then((res: AlbumsRes) => {
        albums = res.toObject().itemsList
        total = res.toObject().total
      })
      .catch(() => {
      })

    return {page, albums, total}
  }

  render() {
    const {page, total} = this.props
    const pPage = previousPage(page)
    const nPage = nextPage(page, PER_PAGE, total)

    const {albums} = this.props
    return (
      <Layout>
        <BodyCard shadow={false}>
          <h1>图辑内容列表</h1>
          <ul>
            {albums.map((album, key) => {
              return <li key={key}><h3>
                <a href={sitemaps.albumShow(album.id)}>{album.title}</a></h3>
              </li>
            })}
          </ul>
          <SimplePaginate
            previousPage={pPage ? mapLink(pPage) : null}
            nextPage={nPage ? mapLink(nPage) : null}
          />
        </BodyCard>

      </Layout>
    )
  }
}

export default AlbumsShow