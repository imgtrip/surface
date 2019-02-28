export const getPage = (req) => {
  const {page} = req.query
  const currentPage = typeof page === 'undefined' ? 1 : Number(page)
  return currentPage === 0 ? 1 : currentPage
}

export const pages = (page: number, perPage: number, total: number, loopTimes: number) => {
  let pages = []
  const lastPage = Math.ceil(total / perPage)
  const max = page + loopTimes
  for (let i = page; i < max; i++) {
    if (i <= lastPage) {
      pages.push(i)
    }
  }

  return pages
}

export const nextPage = (page: number, perPage: number, total: number) => {
  const nextPage = page + 1
  const hasNext = (total - nextPage * perPage) > 0
  return hasNext ? nextPage : null
}

export const previousPage = (page: number) => {
  const previousPage = page - 1
  return previousPage > 0 ? previousPage : null
}
