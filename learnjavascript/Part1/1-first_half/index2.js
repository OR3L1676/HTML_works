//for-in
const person = {
    name: 'orel',
    age: 20
}
for(let key in person) {
    console.log(key, person[key]);
}
const colors = ['red', 'yellow', 'green'];
for(let index in colors) {
    console.log(index, colors[index]);
}
//for-of
for(let color of colors) { 
    console.log(color);
}

//advanced lesson then the one above...
console.log("advanced topic")
for(let key in person) {
    console.log(key, person[key]);
}

for(let key of Object.keys(person)){ // making the object as arr, for using 'of' keyword
    console.log(key)
}

for(let entry of Object.entries(person)){ // making the fields of the object an arr per each
    console.log(entry)
}





function returnMax(num1, num2) {
    let max;
       return num1 > num2 ? max = num1 : max = num2;
}
function fizzBuzz(input) {
    if (!isNaN(input)) {
        if (input % 3 === 0 && input % 5 === 0) {
            return 'fizzBuzz';
        } else if (input % 3 === 0) {
            return 'fizz';
        } else if (input % 5 === 0) {
            return 'buzz';
        } else {
            return input;
        }
    } else {
        return 'is not a number';
    }
}
function checkSpeed(speed){
   let points = Math.floor((speed - 70) / 5);
   points < 0 ? points = 0 : points = points
   if(points >= 12) {
    console.log('num of points: ' + points + ' status: license suspended');
    return 'license suspended'
   }
   else {
    console.log('num of points: ' + points  + ' status: ok');
    return 'ok'
   }
}
