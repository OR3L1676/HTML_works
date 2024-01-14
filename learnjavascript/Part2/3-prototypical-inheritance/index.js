
function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}


//Inharitance shape->circle
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child;
}


function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function() {
    console.log('draw');
}

// when we want to overide a method form the parent we just rewrite it 
Circle.prototype.duplicate = function() {
    Shape.prototype.duplicate.call(this); // bringing the method from the father
    
    console.log('duplicate circle');
}

function Square(width, length, color) {
    this.width = width;
    this.length = length;
    Shape.call(this, color);
}
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Shape;

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'blue');
const q = new Square(2, 4, 'red');

const shapes = [new Circle, new Square]
for(let shape of shapes) {shape.duplicate()};