const getMemberNationality = (memberId, collection) => collection // 1, Array of people
  .find(member => memberId === member.id) // {id: 1, name: 'James', nationality: 'GB'}
  .nationality // 'GB'

const isDistinctElementOfArray = (value, index, self) => self.indexOf(value) === index

const addDinstinctNationalityCount = (club, people) => {
  const distinctNationalityCount = club.members // [ 1, 2, 3]
    .map(memberId => getMemberNationality(memberId, people)) // [ 'NL', 'GB', 'NL'] etc
    .filter(isDistinctElementOfArray) // ['NL', 'GB']
    .length // 2

  return { club, distinctNationalityCount } // { club: { name: 'some club', members: [1,2,3] }, distinctNationalityCount: 2 }
}

const selectMostDiverseClubs = (accumulator, clubWithRating ) => {
  if (clubWithRating.distinctNationalityCount === accumulator.distinctNationalityCount) {
    accumulator.clubs.push(clubWithRating.club)
  }

  if (clubWithRating.distinctNationalityCount > accumulator.distinctNationalityCount) {
    accumulator.distinctNationalityCount = clubWithRating.distinctNationalityCount
    accumulator.clubs = [ clubWithRating.club ]
  }

  return accumulator
}

const getTheMostDiverseClubs = (clubs, people) => { // Array of clubs and arrau of people
    .map(club => addDinstinctNationalityCount(club, people)) // [{ club: { name: 'some club', members: [1,2,3] }, distinctNationalityCount: 2 }, ]
    .reduce(selectMostDiverseClubs, { distinctNationalityCount: 0, clubs: []}) // { distinctNationalityCount: 2, clubs: [{ name: 'some club', members: [1,2,3]}]}
    .clubs // [{ name: 'some club', members: [1,2,3]}]
}

module.exports = getTheMostDiverseClubs
