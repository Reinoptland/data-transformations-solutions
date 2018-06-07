const people = [
    {id: 1, name: 'James', nationality: 'GB'},
    {id: 2, name: 'Adam', nationality: 'CA'},
    {id: 3, name: 'Larry', nationality: 'US'},
    {id: 4, name: 'Fred', nationality: 'NL'},
    {id: 5, name: 'Anna', nationality: 'NL'},
    {id: 6, name: 'Emily', nationality: 'DE'},
    {id: 7, name: 'Lenny', nationality: 'US'},
    {id: 8, name: 'Cara', nationality: 'NL'},
    {id: 9, name: 'Nathalie', nationality: 'NL'},
]

const clubs = [
    {name: 'Book Club', members: [9,3,6,2]},
    {name: 'Auto Club', members: [1,2,3]},
    {name: 'Country Club', members: [7,5,8]},
    {name: 'Food Club', members: [5,1,6,7]},
    {name: 'Yoga Club', members: [1,4,5,3,7]},
    {name: 'Garage Band', members: [1,3,8,9]},
    {name: 'Pool Club', members: [6,4,5,8,9]},
]

// find
// map -> transform a collection
// filter
// reduce -> reduce collection to a number

// iterate over the members of a club, to see what nationality they have
// ['NL', 'US', 'NL', 'GB']
// ['NL', 'US', 'NL', 'GB']

const getMemberNationalities = (group) => {
  return group.members.map(member => {
    const peopleObject = people.find(person => member === person.id)
    return peopleObject.nationality
  })
}

const getDistinctNationalityNumber = (nationalityArray) => {
  const unique = nationalityArray.filter(function onlyUnique(value, index, self) {
    // self.indexOf('NL') ['GB', 'NL', 'NL']
    // self.indexOf('NL') 1 === index 1
    // self.indexOf('NL') 1 === index 2
    return self.indexOf(value) === index;
  })

  return unique.length
}

const bookClubNationalities = getMemberNationalities(clubs[2])

const diversityratingClubs = clubs.map(club => {
  const nationalities = getMemberNationalities(club)
  const diversityRating = getDistinctNationalityNumber(nationalities)
  return {
    name: club.name,
    diversityRating: diversityRating
  }
})


const mostDiverseClubs = diversityratingClubs.reduce(( accumulator, club ) => {
  if (club.diversityRating === accumulator[0].diversityRating) {
    accumulator.push(club)
  }

  if (club.diversityRating > accumulator[0].diversityRating) {
    accumulator = [ club ]
  }

  return accumulator
}, [ { name: 'KKK', diversityRating: 0 } ])


// 2 clubs => [ { name: 'Book Club', diversityRating: 4 }, { name: 'Food Club', diversityRating: 4 } ]
// 2 clubs with members

const finalStuffTired = mostDiverseClubs.map(club => {
  return clubs.find(group => club.name === group.name)
})

console.log(finalStuffTired);

// We want to count how many distinct nationalities are in club X
// Then we want to compare the nationalities count of different clubs
// Return the club(s), with the highest count

const output = [
  { name: 'Book Club', members: [ 9, 3, 6, 2 ] },
  { name: 'Food Club', members: [ 5, 1, 6, 7 ] }
]
