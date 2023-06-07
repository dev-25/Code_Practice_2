console.log('12' == false);   // false

console.log(typeof(undefined+12)) // number

console.log(undefined + 12) // Nan

console.log(undefined+12 == 12) // false

console.log(typeof NaN);   // "number"

console.log(NaN === NaN);  // false

console.log(NaN !== NaN);  // true


console.log(1 + "1");      // "11"
console.log('1' + 1);      // '11'
console.log(1 - "1");      // 0
console.log("5" - 3);      // 2
console.log("5" + 3);      // "53"
// Addition will always result in string
// Subtraction will try if possible

console.log(5+'dev'); // '5dev'
console.log('5'+dev); // ReferenceError: dev is not defined
console.log(5-'dev'); // NaN

console.log(1 == true);   // true
console.log(2 == true);   // false
console.log(0 == false);  // true

console.log('0' == true); // false
console.log("1" == true); // true
console.log('2' == true); // false
console.log("0" == false);// true

console.log(1 == "1");   // true
console.log(1 === "1");   // false

console.log(!!"false");  // true
console.log(!"false");  // false

console.log([] + []);   // ""

console.log(false && true || true);   // true

console.log("length" in [1, 2, 3]);   // true

console.log((1, 2, 3));   // 3
console.log((1, 2, 3454));   // 3454

console.log(+"10");   // 10

console.log(0.1 + 0.2);   // 0.30000000000000004

console.log(10 | 7);   // 3 ***********************

const x = null;
console.log(x ?? "DEV");   // "DEV"

console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object"
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"

console.log([] instanceof Array);      // true
console.log([] instanceof Object);     // true
console.log({} instanceof Object);     // true
console.log({} instanceof Array);      // false

console.log(null && "value");         // null
console.log(undefined && "value");    // undefined
console.log(false && "value");        // false
console.log(0 && "value");            // 0
console.log("" && "value");           // ""

console.log("value" || "default");     // "value"
console.log(undefined || "default");  // "default"
console.log(false || "default");      // "default"
console.log(0 || "default");          // "default"
console.log("" || "default");         // "default"

console.log(3++ +'1')