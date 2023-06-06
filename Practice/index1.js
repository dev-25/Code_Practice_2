// Code1
let i =10
console.log(i, 'out');
(()=>{
 console.log(10, 'in')
})()

// Code2
console.log(undefined + 7878 == 7878);


// Code3
i = 1
console.log(i);
var i=90

// Code4
function test() {
    a=b=10;
    a++;
    b++
}
console.log(a);

test()
// console.log(b);


// Code5
for (var i=0; i<10; i++);
{
    console.log(i);
}

for(var i =1;i<10; i++);{
    console.log(i)
}

