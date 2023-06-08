var person = {
    name: 'John',
    age: 25,
    isStudent: true
};

console.log(person.name); // Output: 'John'
console.log(person.age); // Output: 25

person.age = 30;
console.log(person.age); // Output: 30

person.gender = 'male';
console.log(person.gender); // Output: 'male'

delete person.isStudent;
console.log(person); // Output: { name: 'John', age: 30, gender: 'male' }

var hasName = 'name' in person;
console.log(hasName); // Output: true

for (var kesy in person) {
    console.log(kesy + ': ' + person[kesy]);
}
// ame: John
// age: 25
// isStudent: true

function isEmptyObject(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
}
console.log(isEmptyObject(person)); // Output: false 

var copy = Object.assign({}, person);
console.log(copy); // Output: { name: 'John', age: 30, gender: 'male' }

var car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    owner: {
      name: 'Jane',
      age: 35
    }
};
console.log(car.owner.name); // Output: 'Jane'