const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find(function(course) {
    return course.name === 'a';
});

const course2 = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(course);
console.log(course2);

// arrow function shortest way with a 1 line of code
const course3 = courses.find((course)=> course.name === 'a');
console.log(course3);
    
