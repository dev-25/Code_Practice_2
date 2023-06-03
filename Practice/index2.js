
// Factorial of no using recursion

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is ${result}.`);


//Code2
let globalVar = 'Hello';

function printMessage() {
  console.log(globalVar);
}

printMessage(); // Output: 'Hello' with both let and var


// Code3
function printMessage() {
    var localVar = 'Hello';
    console.log(localVar);
  }
  
printMessage(); // Output: 'Hello'

console.log(localVar); // Throws ReferenceError: localVar is not defined, with both let and var
  

// Code4
for (let i = 0; i < 5; i++);
{
    console.log(i)
    // setTimeout(() => console.log(i), 1000);
}