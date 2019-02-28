import * as React from 'react'
import {Button} from 'antd'
import AuthModal from '../Modals/AuthModal'
import {RootState} from '../../redux'
import {connect} from 'react-redux'
import {Modals} from '../../@types/data'
import {loading} from '../../lib/loading'
import {createAlbumImage, deleteAlbumImage} from '../../api/image'
import {error, success} from '../../lib/message'
import {createFavorite, deleteFavorite} from '../../redux/images'
import Icon from 'antd/lib/icon'

interface Props {
  imageId: number
  authId: number
  favorited: boolean
  changeHasDisplayedModal: (m: Modals, status: boolean) => void
}

interface InjectedProps extends Props {
  albumId: number
  favorites: number[]
  createFavorite: (id: number) => void
  deleteFavorite: (id: number) => void
}


class FavoriteButton extends React.Component<Props> {
  state = {
    authVisible: false,
    loading: false,
  }
  protected willUnmounte = false

  get getProps() {
    return this.props as InjectedProps
  }

  get isFavorite() {
    return this.getProps.favorited
  }

  changeAuthVisible(visible: boolean) {
    this.setState({authVisible: visible})
    this.getProps.changeHasDisplayedModal(Modals.AUTH, visible)
  }

  clicked() {
    const {albumId, authId, imageId, createFavorite, deleteFavorite} = this.getProps
    if (!authId) {
      this.changeAuthVisible(true)
      return
    }
    const that = this
    loading(that)

    const loaded = () => {
      if (!this.willUnmounte) {
        this.setState({loading: false})
      }
    }

    const successHandler = () => {
      this.isFavorite ? deleteFavorite(imageId) : createFavorite(imageId)
      success()
      loaded()
    }
    const errorHandler = () => {
      error()
      loaded()
    }

    this.isFavorite
      ? deleteAlbumImage(albumId, imageId).then(successHandler).catch(errorHandler)
      : createAlbumImage(albumId, imageId).then(successHandler).catch(errorHandler)
  }

  componentWillUnmount() {
    this.willUnmounte = true
  }

  render() {
    const {loading, authVisible} = this.state
    return (
      <span>
        <Button
          onClick={this.clicked.bind(this)}
          loading={loading}
          disabled={loading}
          type={this.isFavorite ? 'danger' : 'default'}
          title={(this.isFavorite ? '从我喜欢的图中移除' : '添加到我喜欢的图')}
        >
          {this.isFavorite ? <Icon type="heart" theme="filled"/> : <Icon type="heart-o"/>}
        </Button>
        <AuthModal
          visible={authVisible}
          hide={this.changeAuthVisible.bind(this, false)}
        />
      </span>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    albumId: state.auth.albumId,
    favorites: state.auth.favorites,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFavorite: (id: number) => dispatch(createFavorite(id)),
    deleteFavorite: (id: number) => dispatch(deleteFavorite(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)
