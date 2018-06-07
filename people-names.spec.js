const getNamesById = require('./people-names');

// AAA
// Arrange
// Act
// Assert

test('get names from people by id', () => {
  // Arrange
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

  const expectedOutcome = ['Rein', 'Bram']
  // Act!
  const actualOutcome = getNamesById(listOfNumbers, peopleData)

  // Assert!
  expect(actualOutcome).toEqual(expectedOutcome);
  expect(listOfNumbers).toEqual([2,5])
});
