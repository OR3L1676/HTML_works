
const numbers = [3, 4];

// add to end (right)
numbers.push(5, 6)
console.log(numbers)

// add to start (left)
numbers.unshift(1, 2)
console.log(numbers)

// add to middle (center)
numbers.splice(2, 0, 'a', 'b') // 0 - indexes to delete after 'a' 'b' and forward
console.log(numbers)

const numbers2 = [1,2,3,4];

// remove from the end
const last = numbers2.pop()
console.log(numbers2)
console.log(last)

// remove from the begining 
const first = numbers2.shift()
console.log(numbers2)
console.log(first)

// remove from the middle
const middle = numbers2.splice(2, 1)
console.log(numbers2)
console.log(middle)
