// Code1
const a = () => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            num = 12;
            const b = num*num;
            if (b) resolve (b);
            else reject (new Error('Wrong Data'))
        },1000);
    });
}

async function myFunction() {
    try {
        const data = await a();
        console.log(data);
    }catch (error) {
        console.error(error.message);
    }
}
myFunction();  


// Code2
let f = (c,d) => {
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            let add = c+d
            if (add>5) resolve('True')
            else reject('False')
        },3000);
    })
}

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