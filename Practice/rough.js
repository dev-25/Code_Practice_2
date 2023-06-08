
let items = [
    {id:1, name: 'Devesh'},
    {id:2, name: 'Sharma'}
];

let id = 2;
const itemIndex = items.findIndex(item => item.id === id);

console.log(itemIndex);

let b = items[itemIndex].name
console.log(b);


let data = ()