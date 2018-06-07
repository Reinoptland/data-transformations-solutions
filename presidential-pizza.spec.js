const formatPresidentialPizzaData = require("./presidential-pizza")

// AAA
// Arrange
// Act
// Assert

test('format presidents and pizza data', () => {
  // Arrange
  const names = ["George", "Richard", "Abraham", "Donald"]

  const ages = {
    George: 71,
    Richard: 81,
    Abraham: 56,
    Donald: 71
  }
  const addresses = {
    George: "Fleet street, 121b",
    Richard: "Bermuda drive, 33",
    Abraham: "Cincinatti Av., 22a"
  }
  const willDeliverPizza = {
    "Fleet street": true,
    "Bermuda drive": false,
    "Cincinatti Av.": true
  }

  const expectedOutcome = {
    userData: [
      {
        name: 'George',
        age: 71,
        address: 'Fleet street, 121b',
        willDeliverPizza: true
      },
      {
        name: 'Richard',
        age: 81,
        address: 'Bermuda drive, 33',
        willDeliverPizza: false
      },
      {
        name: 'Abraham',
        age: 56,
        address: 'Cincinatti Av., 22a',
        willDeliverPizza: true
      },
      { name: 'Donald',
        age: 71,
        address: undefined,
        willDeliverPizza: 'Unknown'
      }
    ],
    highestAge: 81,
    lowestAge: 56
  }

  // Act!
  const actualOutcome = formatPresidentialPizzaData(
    names,
    ages,
    addresses,
    willDeliverPizza
  )

  // Assert!
  expect(actualOutcome).toEqual(expectedOutcome);
});
