
// // Factorial of no using recursion

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//     return n * factorial(n - 1);
// }
// const number = 5;
// const result = factorial(number);
// console.log(`The factorial of ${number} is ${result}.`);


// //Code2
// let globalVar = 'Hello';

// function printMessage() {
//   console.log(globalVar);
// }

// printMessage(); // Output: 'Hello' with both let and var


// // Code3
// function printMessage() {
//     var localVar = 'Hello';
//     console.log(localVar);
//   }
  
// printMessage(); // Output: 'Hello'

// console.log(localVar); // Throws ReferenceError: localVar is not defined, with both let and var
  

// // Code4
// for (let i = 0; i < 5; i++);
// {
//     console.log(i)
//     // setTimeout(() => console.log(i), 1000);
// }


// // Code 5
// function foo() {
//   if (true) {
//     var y = 20;
//   }
//   console.log(y);
// }
// foo(); // ReferenceError: y is not defined for let, for var-> 20


// // Code6
// function foo() {
//   let x = 10;

//   function bar() {// 10
//     console.log(x);
//   }
//   bar();
// }
// console.log(x); // Reference error
// foo()

// // Code7
// for (var i = 0; i < 5; i++) {
//   setTimeout(() => console.log(i), 1000);
// }


// // Code8
// console.log(b)
// var b = 3 
// // ReferenceError: Cannot access 'b' before initialization - for let, For var - undefined


// Code 9 
// const obj1 = { value: 10,data: 12 };
// const obj2 = obj1;
// obj2.value = 20;
// console.log(obj1.value);  // 20

// Code10
// let a = 10
// let b = a
// b = 20
// console.log(b) // 20
// console.log(a) // 10
