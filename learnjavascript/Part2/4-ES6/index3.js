
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // instance method
    draw() {
        console.log('draw')
    }

    // static method
    static parse(str) {
        console.log(str.split('').reverse().join(''));
    }
}

const circle = new Circle(1);
console.log(circle)
Circle.parse('lero')
