
// Asynchronous 
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber >= 0.5) resolve(randomNumber);
        else reject(new Error('Promisee rejected'));
    }, 1000);
  });
 
myPromise
.then((result) => {
console.log(`Promise fulfilled with result: ${result}`);
})
.catch((ff) => {
console.error(`Promise rejected with error: ${ff}`);
});


// Synchronous
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        let sum = a*b
        if (sum) resolve(sum)
        else reject(new Error('Not Possible'))
    });
}

add(1,'we')
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})


// Code 3
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


// Code4
const add = (a,b) => {
    return new Promise((resolve, reject) => {
        let sum = a*b
        if (sum) resolve(sum)
        else reject(new Error('Not Possible'))
    });
}

add(1,)
.then((result) => {
    console.log(result)
})
.catch((error) => {
    console.log(error)
})


// Code5
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

// CODE 5 for async await
async function main_functon(c,d) {
    try {
        let data = await f(c,d);
        console.log(data);
    }
    catch (error) {
        console.error(error)
    }
}
main_functon(2,7);