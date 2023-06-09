// WAP to reverse an integer without converting it to a string, without using any builtin methods. 

let a = 123;
let c = 0

while (a>0){
    b = a %10
    a = ~~[a/10]  // bitwise not
    c = c*10 + b
}

console.log(c)
