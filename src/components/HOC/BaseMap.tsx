import * as React from 'react'
import {nextPage, previousPage} from '../../service/paginate'
import {PER_MAP_PAGE} from '../../constants/conf'
import Layout from '../Layouts/Layout'
import BodyCard from '../Cards/ShadowCard'
import SimplePaginate from '../Widgets/SimplePaginate'


interface Props {
  title: string
  pages: number[]
  total: number
  page: number
  link: (page: number) => string
  mapLink: (page: number) => string
}


class BaseMap extends React.Component<Props> {

  render() {
    const {page, total, pages, mapLink, link, title} = this.props
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
                  return <a href={link(page)} className={'item'} key={key}>{page}</a>
                })}
              </div>
            </div>
          </div>

          <SimplePaginate
            previousPage={pPage ? mapLink(pPage) : null}
            nextPage={nPage ? mapLink(nPage) : null}
          />
        </BodyCard>
      </Layout>
    )
  }
}

export default BaseMap