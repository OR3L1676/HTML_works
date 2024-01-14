// sorting basic arr with strings and numbers
const numbers = [2,3,1];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers)

// sorting advanced arr with objects
const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'},
    {id: 3, name: 'SQL'},
    {id: 4, name: 'C++'}
];

// a way to sort a object parameters by a value
courses.sort(function(a, b) { 
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(courses)