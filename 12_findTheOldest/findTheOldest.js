const findTheOldest = function (arr) {

  let addAge = arr.map(item => {

    let age = 0;

    if (item.yearOfDeath) {
      age = item.yearOfDeath - item.yearOfBirth;
    } else {
      let year = new Date().getFullYear();
      age = year - item.yearOfBirth;
    }

    item['age'] = age;

    return item;
  });

  addAge.sort((a, b) => a.age - b.age);

  return addAge[addAge.length - 1];

}

// Do not edit below this line
module.exports = findTheOldest;
