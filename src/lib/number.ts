const rand = (min = 1, max = 100) => {
  return Math.floor(Math.random() * max) + min
}

const isNumber = (input) => {
  const regex = /^[0-9]+$/
  return input.match(regex)
}

export {rand, isNumber}