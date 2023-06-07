
var fruits = ['apple', 'banana', 'orange'];

console.log(fruits[0]); // Output: 'apple'
console.log(fruits[2]); // Output: 'orange'

fruits[1] = 'grape';
console.log(fruits); // Output: ['apple', 'grape', 'orange']

fruits.push('mango');
console.log(fruits); // Output: ['apple', 'grape', 'orange', 'mango']

fruits.pop();
console.log(fruits); // Output: ['apple', 'grape', 'orange']

fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'grape', 'orange']

fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'grape', 'orange']

var index = fruits.indexOf('grape');
console.log(index); // Output: 1

fruits.splice(1, 2);
console.log(fruits); // Output: ['apple']

var moreFruits = ['mango', 'kiwi'];
var allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['apple', 'mango', 'kiwi']

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

var isInArray = fruits.includes('apple');
console.log(isInArray); // Output: true