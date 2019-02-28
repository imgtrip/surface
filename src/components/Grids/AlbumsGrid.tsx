import * as React from 'react'
import AlbumRow from './AlbumRow'
import {chunk} from 'lodash'
import {Album} from '../../@types/data'

interface Props {
  albums: Album[]
  columns?: number
  newTab?:boolean
}

export default class extends React.Component<Props> {

  render() {
    const {albums, columns,newTab} = this.props
    return chunk(albums, columns || 3).map((albums, key) => {
      return <AlbumRow albums={albums} key={key} newTab={newTab}/>
    })
  }
}
