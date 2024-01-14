let x = {value: 10};
let y = x;
x.value = 20;
console.log(x, y);
y.google = 'google'
console.log(x, y);
x.google = 'google translate'
console.log(x, y);

// primitive (by value)
let number = 10;
function increase(number) {
    number++;
}
increase(number)
console.log(number)

// object (by refrence)
let number1 = {value: 10};
function increase(number1) {
    number1.value++;
}
increase(number1)
console.log(number1)

