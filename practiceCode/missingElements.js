// WAP to find missing elements from the array?

function findMissingElements(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const missingElements = [];
  
    for (let i = min; i <= max; i++) {
      if (!arr.includes(i)) {
        missingElements.push(i);
      }
    }
  
    return missingElements;
}

const numbers = [1, 2, 4, 6, 9];
const missing = findMissingElements(numbers);
console.log(missing); // Output: [3, 5, 7, 8]


