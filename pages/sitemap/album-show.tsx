import * as React from 'react'
import {PER_MAP_PAGE, PER_PAGE} from '../../src/constants/conf'
import {setTokenHash} from '../../src/service/token'
import {albumImages, showAlbum as showAlbumApi} from '../../src/api/image'
import {AlbumImagesRes, ShowAlbumRes} from '../../pb/imgtrip_pb'
import {getPage, nextPage, pages, previousPage} from '../../src/service/paginate'
import {println} from '../../src/service/system'
import {showAlbum, sitemaps} from '../../src/service/link'
import SimplePaginate from '../../src/components/Widgets/SimplePaginate'
import BodyCard from '../../src/components/Cards/ShadowCard'
import Layout from '../../src/components/Layouts/Layout'


const link = (id, page) => (showAlbum(id) + `?page=${page}`)
const mapLink = (id, page) => sitemaps.albumShow(id) + `&page=${page}`


interface Props {
  id: number
  page: number
  pages: number[]
  total: number
  title: string
}

class AlbumShow extends React.Component<Props> {

  static async getInitialProps({token, req}) {
    setTokenHash(token)

    let total: number
    const {id} = req.query
    const page = getPage(req)
    let title: string

    await showAlbumApi(id)
      .then((showAlbumRes: ShowAlbumRes) => {
        title = showAlbumRes.getAlbum().getTitle()
      })
      .catch((error) => {
        println(error)
      })

    await albumImages(id, page, PER_PAGE, true)
      .then((albumImagesRes: AlbumImagesRes) => {
        total = albumImagesRes.toObject().total
      })
      .catch((error) => {
        println(error)
      })

    return {
      pages: pages(page, PER_PAGE, total, PER_MAP_PAGE),
      id,
      total,
      title,
      page,
    }
  }

  render() {
    const {id, page, title, total, pages} = this.props
    const pPage = previousPage(page)
    const nPage = nextPage(page, PER_MAP_PAGE, total)

    return (
      <Layout>
        <style jsx global>{`
        .maps .item{
          margin: 4px;
          display: inline-block;
          min-width: 2em;
        }
        `}</style>
        <BodyCard shadow={false}>
          <div className={'maps'}>
            <div>
              <h1>{title}</h1>
              <div>
                {pages.map((page, key) => {
                  return <a href={link(id, page)} className={'item'} key={key}>{page}</a>
                })}
              </div>
            </div>
          </div>

          <SimplePaginate
            previousPage={pPage ? mapLink(id, pPage) : null}
            nextPage={nPage ? mapLink(id, nPage) : null}
          />
        </BodyCard>
      </Layout>
    )

  }
}

export default AlbumShow