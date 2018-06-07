const evenUneven = (accumulator, number) => {

  if (number % 2 === 0) {
    // even
    accumulator.even.push(number)
  }

  if (number % 2 === 1) {
    // uneven
    accumulator.uneven.push(number)
  }

  return accumulator
}

module.exports = evenUneven
