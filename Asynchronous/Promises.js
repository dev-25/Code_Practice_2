
let p = (a,b) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let sum = a + b
            if (sum > 5) resolve('True')
            else reject('False')
        },2000)
    });
}

p(3,'dd')
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.error(error)
})



let f = (c,d) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let add = c+d
            if (add>5) resolve('True')
            else reject('False')
        },3000);
    })
}

f(3,'sd')
.then((result) =>{
    console.log(result)
})
.catch((error) =>{
    console.log(error)
})
