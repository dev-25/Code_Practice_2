// Code to find even numbers in a list

function findEvenNumbers(list) {
    const evenNumbers = list.filter(number => number % 2 === 0);
    return evenNumbers;
  }
  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = findEvenNumbers(numbers);
console.log(evenNumbers); 
  