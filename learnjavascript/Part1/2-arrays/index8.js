
const numbers = [-1,2,3,6,8];
// easy check if the whole contenct of the arr is positive
const allPositive = numbers.every((value)=> value >= 0);
console.log(allPositive)

// easy check if the one contenct of the arr is positive
const anyPositive = numbers.some((value)=> value >= 0);
console.log(anyPositive)

// returning which numbers we want from arr by conditions
const filtered = numbers.filter(function(value) {
    return value >= 0;
})
console.log(filtered);

// example of map, taking a numbers from arr and planting them on html element
const items = filtered.map((number)=> '<li>' + number + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// taking a numbers from arr and planting them on object
const items2 = filtered.map((number)=> {
    const obj = {value: number};
    return obj;
})
console.log(items2);

// example of the whole procces in a short and efficiance way
const items3 = numbers.filter((number)=> number >= 0).map((number)=> ({value: number}));
console.log(items3);

// advance of chaining methode like before 
const items4 = numbers
.filter((number)=> number >= 0)
.map((number)=> ({value: number}))
.filter((obj)=> obj.value > 1)
.map((obj)=> obj.value);
console.log(items4);
