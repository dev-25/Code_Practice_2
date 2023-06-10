// Code1
let [a,b] = [0,1]
let n =10;
let array = []
array.push(a,b)

for(i = 2; i<n; i++){
    c = a+b;
    array.push(c)
    a = b;
    b = c;
}
console.log(array)


// Code2
function fibonacciIterative(n) {
    const fibSeries = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      const nextFib = fibSeries[i - 1] + fibSeries[i - 2];
      fibSeries.push(nextFib);
    }
  
    return fibSeries;
  }
  
// Example usage
const number = 7;
const result = fibonacciIterative(number);
console.log(result);
