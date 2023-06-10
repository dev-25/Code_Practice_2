
// Code1
const data = (value,a) => {
    setTimeout(()=>{
        a('Devesh'+value)
    },2000);
};
data('Sharma',(fnc)=>{
    console.log(fnc)
})

// Code2
const no = (a,b,c) => {
    setTimeout(() => {
        let add = a + b;
        c(add)
    },1000)
};
no(1,2,(ans)=>{
    console.log(ans)
})

// Code3
const add = (a,b,cb) => {
    const c  = a + b;
    cb(c);
}
add(12,2,(no) =>{
    console.log(no);
})

// Ans

// 14
// 3
// DeveshSharma