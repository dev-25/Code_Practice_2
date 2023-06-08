var students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Alex', age: 19 }
];

console.log(students[0].name); // Output: 'John'
console.log(students[1].age); // Output: 22

students[1].age = 23;
console.log(students[1]); // Output: { name: 'Jane', age: 23 }

students.push({ name: 'Sarah', age: 21 });
console.log(students); // Output: [{ name: 'John', age: 20 }, { name: 'Jane', age: 23 }, { name: 'Alex', age: 19 }, { name: 'Sarah', age: 21 }]

students.splice(1, 1);
console.log(students); // Output: [{ name: 'John', age: 20 }, { name: 'Alex', age: 19 }]

for (var i = 0; i < students.length; i++) {
    console.log(students[i].name);
}
// John
// Jane
// Alex  

var eighteenPlus = students.filter(function(student) {
    return student.age >= 18;
});
console.log(eighteenPlus); // Output: [{ name: 'John', age: 20 }, { name: 'Alex', age: 19 }]

var eighteenPlus = students.filter(function(student) {
return student.age >= 18;
});
console.log(eighteenPlus); // Output: [{ name: 'John', age: 20 }, { name: 'Alex', age: 19 }]
