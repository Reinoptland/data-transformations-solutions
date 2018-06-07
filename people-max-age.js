// map <-- transforming a collection
// filter <-- separate a collection into a smaller collection
// reduce
// find <-- find the first record that matches the condition
// sort

//

const oldestSoFar = (personWithHighestAgeSoFar, person) => {
  if (person.age > personWithHighestAgeSoFar.age) {
    personWithHighestAgeSoFar = person
  }
  return personWithHighestAgeSoFar
}

module.exports = oldestSoFar;
