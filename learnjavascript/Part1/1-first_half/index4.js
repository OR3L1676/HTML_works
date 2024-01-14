function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

// heres is how its behind the seanse works
// this is another implementation of the Circle object 
// this and the one above are the same
const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }`);
const cici = new Circle1(2);
console.log(cici.radius)
// damn is nice!
