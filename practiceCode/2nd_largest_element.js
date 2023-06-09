// 1. WAP to find Second largest element in an array : arr[] = [12, 35, 1, 10, 34, 1, 35], 
// without sorting, without using any built-in methods and without deleting duplicate elements. 
// What will be the time complexity?


arr = [12, 35, 1, 10, 34, 1, 35];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if(arr[i]>largest){
        secondLargest = largest;
        largest = arr[i];
    }else if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
      }
    
}
console.log(secondLargest)  // 34