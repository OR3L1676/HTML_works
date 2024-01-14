let numbers = [1,2,3,4]
let another = numbers

// sol1 (good ,but not works with multiple refrences)
numbers = []

// sol2 (best)
numbers.length = 0

// sol3 (good but noisy)
numbers.splice(0, numbers.length)

// sol4 (bad)
while(numbers.length > 0){
    numbers.pop()
}
console.log(another)
