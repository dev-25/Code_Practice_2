// // Code1
// function divideNumbers(a, b) {
//     try {
//         if (b === 0) {
//             throw new Error("Division by zero is not allowed.");
//         }else if(a === 0){
//             throw new Error('A is Zero, so its goog')
//         }
//         return a / b;
//     } catch (error) {
//         console.log("An error occurred:", error.message);
//     }
// }

// console.log(divideNumbers(0, 2)); // Output: 5
// console.log(divideNumbers(5, 0)); // Output: An error occurred: Division by zero is not allowed.
// console.log(divideNumbers(8, 4)); // Output: 2


// // Code2
// function processUserData(user) {
//     try {
//       if (!user.name) {
//         throw new Error("User name is required.");
//       }
//       if (!user.age || isNaN(user.age)) {
//         throw new Error("Invalid age value.");
//     }
//       console.log("User data:", user);
//     } catch (error) {
//       console.log("An error occurred:", error.message);
//     }
// }

// const user1 = { name: "John", age: 30 };
// processUserData(user1);

// const user2 = { age: "25" };
// processUserData(user2);

// const user3 = {};
// processUserData(user3);

// const user4 = {};
// processUserData(user4)

// // COde3
try {
    try {
      // Code block 1
      throw new Error("This is one");
    } catch (error1) {
      console.log("This is Two", error1.message);
      throw new Error("This is Three");
    }
  } catch (error2) {
}

