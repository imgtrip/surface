import * as React from 'react'
import Card from 'antd/lib/card'
import {Meta} from 'antd/lib/list/Item'
import {Album} from '../../@types/data'
import OptionalTags from '../Tags/OptionalTags'
import {CDN, IMAGE_SIZES} from '../../constants/conf'

interface Props {
  album: Album
}

export default class extends React.Component<Props> {

  render() {
    const {album} = this.props
    const {title} = album
    const albumMeta = <OptionalTags data={album} linkable={false} tags={['views', 'amounts', 'comments']}/>
    return (
      <div>
        <style jsx>{`
          .album-card {
            text - align: center;
            padding: 16px !important;
            background: white;
          }

          .album-card:hover {
            box - shadow: 0 5px 40px rgba(0, 0, 0, .88);
            border-color: rgba(0, 0, 0, .2);
            z-index: 2;
          }

          .album-card .cover {
            display: inline-block;
          }
        `}</style>
        <Card
          hoverable={false}
          cover={<img alt={title} src={CDN + album.cover + IMAGE_SIZES.SMALL}
                      className="cover"/>}
          className="album-card"
          bodyStyle={{padding: '10px 10px 0 10px'}}
        >
          <Meta
            style={{textAlign: 'center'}}
            title={title}
            description={albumMeta}
          />
        </Card>
      </div>
    )
  }
}
