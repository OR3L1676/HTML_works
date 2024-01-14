const numbers = [1,2,3,1,4]

// search a value in the arr, and gives his index.
console.log(numbers.indexOf(1));
// search a value in the arr from spesific index and forward, and gives his index.
console.log(numbers.indexOf(1, 2));

// search the last value in the arr, and gives his index.
console.log(numbers.lastIndexOf(1));
// search a value in the arr from spesific index and backward, and gives his index.
console.log(numbers.lastIndexOf(1, 2));

// search a value in the arr, and return boolean if he exists, but we dont use it.
console.log(numbers.indexOf(1) !== -1);
// here the better way.
console.log(numbers.includes(1));
