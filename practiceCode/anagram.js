
// Given an array of strings, group the anagrams together. You can return the answer in any order.
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
//  Output: [["bat"],["nat","tan"],["ate","eat","tea"

function groupAnagrams(strs) {
    const groups = {};
  
    for (const str of strs) {
      const sortedStr = str.split('').sort().join('');
  
      if (sortedStr in groups) {
        groups[sortedStr].push(str);
      } else {
        groups[sortedStr] = [str];
      }
    }
  
    return Object.values(groups);
  }
  
  // Example usage
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const result = groupAnagrams(strs);
  console.log(result);
  