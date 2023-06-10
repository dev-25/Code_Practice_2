// WAP with 2 different logic, to find all duplicate number in an array

// Code1 
function findDuplicates(array) {
    const duplicates = [];
    const countMap = {};
  
    for (const num of array) {
      countMap[num] = (countMap[num] || 0) + 1;
    }
  
    for (const num in countMap) {
      if (countMap[num] > 1) {
        duplicates.push(parseInt(num));
      }
    }
  
    return duplicates;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 6, 7];
  const duplicates = findDuplicates(numbers);
  console.log(duplicates); // Output: [4, 6]
