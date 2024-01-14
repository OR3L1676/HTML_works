
const numbers = [1,2,3];

for(let number of numbers) {
    console.log(number);
}

numbers.forEach(function(number) {
    console.log(number);
})
numbers.forEach((number, index)=> console.log(index, number))


// different lesson
const joined = numbers.join(',');
console.log(joined);

const message = 'This-is-my-first-message'
const parts = message.split('-')
console.log(parts)

const combined = parts.join(', ');
console.log(combined)