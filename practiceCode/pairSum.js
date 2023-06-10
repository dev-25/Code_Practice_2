// [80, 60, 10, 50, 30, 100, 0, 50]
// Find pairs whose sum = 100;
// Logic for above problem?
// What will be the complexity for it?
// Any better solution for the above problem?

function findPairsWithSum(arr, target) {
    const complements = new Set();
    const pairs = [];
  
    for (const num of arr) {
      const complement = target - num;
  
      if (complements.has(complement)) {
        pairs.push([num, complement]);
        }
    
      complements.add(num);
    }
  
    return pairs;
  }
  
  // Example usage
  const arr = [80, 60, 10, 50, 30, 100, 0, 50];
  const target = 100;
  const result = findPairsWithSum(arr, target);
  console.log(result);
  