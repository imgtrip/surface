import * as React from 'react'
import Col from 'antd/lib/grid/col'
import AlbumCard from '../Cards/AlbumCard'
import Row from 'antd/lib/grid/row'
import {Album} from '../../@types/data'
import {showAlbum} from '../../service/link'

interface Props {
  albums: Album[]
  newTab?: boolean
}

export default class extends React.Component<Props> {

  get cols() {
    const {newTab} = this.props
    return this.props.albums.map((album, key) => {
      const link = showAlbum(album.id)
      return (
        <Col span={8} key={key}>
          <a href={link} target={newTab ? '_blank' : ''} style={{textDecoration: 'none'}}>
            <AlbumCard album={album}/>
          </a>
        </Col>
      )
    })
  }

  render() {
    return <Row>{this.cols}</Row>
  }
}
