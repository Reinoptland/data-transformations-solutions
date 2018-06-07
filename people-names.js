const listOfNumbers = [ 2, 5,]

const peopleData = [{
  id: 2,
  name: 'Rein',
  age: 30,
}, {
  id: 3,
  name: 'Arien',
  age: 34,
},{
  id: 5,
  name: 'Bram',
  age: 32,
}]

// map <-- transforming a collection
// filter <-- separate a collection into a smaller collection
// reduce
// find <-- find the first record that matches the condition
// sort

const findPersonById = (id, people) => {
  return people.find(person => {
    const check = id === person.id
    // return true and then the current record is returned
    return check
  })
}

const getNamesById = (ids, people) => {
  const nameArray = ids.map(id => {
    const foundPerson = findPersonById(id, people)

    return foundPerson.name
  })

  return nameArray
}

// get the number from the list X
// Check the list of people to see if the id matches X
// Get the name of that person X
// Add the name to the collection X
// Repeat for all numbers in the list X
// Also, don't modify the list ids X

module.exports = getNamesById;
