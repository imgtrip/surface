import * as React from 'react'
import BodyCard from '../../src/components/Cards/ShadowCard'
import Layout from '../../src/components/Layouts/Layout'
import {sitemaps} from '../../src/service/link'
import {ALBUMS, HOME} from '../../src/constants/seo'

class Index extends React.Component {

  render() {

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
          <h1>网站地图</h1>
          <div className={'maps'}>
            <ul>
              <li><h2><a href={sitemaps.images}>图片地图</a></h2></li>
              <li><h2><a href={sitemaps.albums}>图辑地图</a></h2></li>
              <li><h2><a href={sitemaps.albumsShow}>图辑详情地图</a></h2></li>
            </ul>
          </div>
        </BodyCard>
      </Layout>
    )
  }
}

export default Index