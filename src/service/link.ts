export const showAlbum = (id: number | string) => `/a/${id}`
export const showUser = (id: number | string) => `/u/${id}`
export const showPost = (id: number | string) => `/p/${id}`
export const retrievePassword = '/retrieve-password'
export const download = (image: string, id: number, height?: number, width?: number) => {
  let params = height && width ? `&height=${height}&width=${width}` : ''
  return `/d?image=${image}${params}&id=${id}`
}
export const home = '/'
export const albums = '/a'
export const forum = '/p'
export const hot = '/u/1800'
export const reviews = '/r'
export const error = code => `/error/${code}`
export const sitemaps = {
  index: '/sitemap',
  albums: '/sitemap/albums',
  images: '/sitemap/images',
  albumsShow: '/sitemap/albums-show',
  albumShow: id => `/sitemap/album-show?id=${id}`,
}

export const scoreAndReviewPostLink = showPost(7)