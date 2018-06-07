const willDeliverPizzaByAdress = (address, willDeliverPizza) => {
  if (address === undefined) return 'Unknown'

  const street = address.split(',')[0]
  return willDeliverPizza[street]
}

const formatPresidentialPizzaData = (names, ages, addresses, willDeliverPizza ) => {
  const userData = names //
    .map(name => ({
      name,
      age: ages[name],
      address: addresses[name],
      willDeliverPizza: willDeliverPizzaByAdress(addresses[name], willDeliverPizza)
    }))

  // create a new array with user data using the '...' spread operator,
  // .sort mutates the array and will mess with the order if we don't make a separate one
  const userDataSortedByAge = [...userData].sort((a, b) => a.age - b.age)
  const lowestAge = userDataSortedByAge[0].age // first element
  const highestAge = userDataSortedByAge[userDataSortedByAge.length - 1].age // last element

  return {
    lowestAge,
    highestAge,
    userData
  }
}

module.exports = formatPresidentialPizzaData
