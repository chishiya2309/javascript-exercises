function getAge(birthYear, deathYear) {
    const curentYear = new Date().getFullYear();
    const endYear = deathYear || curentYear;

    return endYear - birthYear;
}

const findTheOldest = function(people) {
    let oldest = people[0];

    for (let i = 1; i < people.length; i++) {
        const currentPersonAge = getAge(people[i].yearOfBirth, people[i].yearOfDeath);
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

        if (currentPersonAge > oldestAge) {
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
