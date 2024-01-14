
// Object-oriented Programming (OOP)
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    }, 
    isVisible: true,
    draw: function() {
        console.log('draw');
    }
};
delete circle.draw;
console.log(circle);


// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const circle1 = createCircle(1);
const circle3 = createCircle(2);
circle1.draw();
console.log(circle3.radius);

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle2 = new Circle(1);