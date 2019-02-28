const CODE = {
  arrowLeft: 37,
  arrowUp: 38,
  arrowRight: 39,
  arrowDown: 40
}

const isArrowRight = (code: number) => {
  return code === CODE.arrowRight
}

const isArrowLeft = (code: number) => {
  return code === CODE.arrowLeft
}

const isArrowUp = (code: number) => {
  return code === CODE.arrowUp
}

const isArrowDown = (code: number) => {
  return code === CODE.arrowDown
}

export {
  CODE,
  isArrowRight,
  isArrowLeft,
  isArrowUp,
  isArrowDown
}
