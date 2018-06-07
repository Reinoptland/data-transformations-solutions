const oldestSoFar = require('./people-max-age');

// AAA
// Arrange
// Act
// Assert

test('get the maximum age for a collection of people', () => {
  // Arrange! DATA!
  const people = [
    {name: 'Don', age: 23},
    {name: 'Adam', age: 33},
    {name: 'Steve', age: 14},
    {name: 'Rachel', age: 56},
    {name: 'Maud', age: 46},
    {name: 'Hermien', age: 28}
  ]

  const expectedOutcome = {name: 'Rachel', age: 56}

  // Act
  const actualOutcome = people.reduce(oldestSoFar)

  // Assert
  expect(actualOutcome).toEqual(expectedOutcome);
});
