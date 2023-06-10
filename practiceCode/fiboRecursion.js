
function fibonacciRecursive(n) {
    if (n <= 1) {
      return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }

const number = 7;
for (let i = 0; i <= number; i++) {
    console.log(fibonacciRecursive(i));
}