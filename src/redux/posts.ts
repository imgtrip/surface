// import {Post} from '../@types/data'
// import {Reducer} from 'redux'
//
// enum Actions {
//   APPEND_POSTS = 'POST_APPEND_IMAGES',
// }
//
// interface PostState {
//   data: Post[]
// }
//
// const defaultState = {data: []}
//
// const reducer: Reducer<PostState> = (state = defaultState, action) => {
//   const {type, data} = action
//   switch (type) {
//     case Actions.APPEND_POSTS:
//       return {...state, data: [...state.data, ...data]}
//   }
//   return state
// }
//
// const appendPosts = (data: Post[]) => ({type: Actions.APPEND_POSTS, data})
//
// export {
//   PostState,
//   reducer,
//   appendPosts,
// }
