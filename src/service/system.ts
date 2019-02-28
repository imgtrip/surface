import {DEV} from '../constants/conf'

export const println = (...args) => {
  if (DEV) {
    console.log(args)
  }
}