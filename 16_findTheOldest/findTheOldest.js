const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const lastYear = person.yearOfDeath || currentYear;
    const age = lastYear - person.yearOfBirth;

    const oldestLastYear = oldest.yearOfDeath || currentYear;
    const oldestAge = oldestLastYear - oldest.yearOfBirth;

    return age > oldestAge ? person : oldest;
  });
};

// Example usage:
const people = [
  { name: "Carly", yearOfBirth: 1942, yearOfDeath: 1970 },
  { name: "Ray", yearOfBirth: 1962, yearOfDeath: 2011 },
  { name: "Jane", yearOfBirth: 1912 },
];

const oldest = findTheOldest(people);
console.log(oldest.name); // Should return Jane (if current year is 2025)

// Do not edit below this line
module.exports = findTheOldest;
