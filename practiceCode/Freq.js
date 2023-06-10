// find frequency of each and every character in a string.

function findCharacterFrequency(str) {
    const frequency = {};
  
    for (const char of str) {
      if (frequency[char]) {
        frequency[char]++;
      } else {
        frequency[char] = 1;
      }
    }
  
    return frequency;
  }
  
  // Example usage
  const string = "Hello, World!";
  const charFrequency = findCharacterFrequency(string);
  console.log(charFrequency);
  