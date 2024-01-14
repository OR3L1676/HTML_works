// before ES6

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }


// with ES6

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.move = function() {
            console.log(move);
        }
    }

    draw() {
        console.log('draw');
    }
}

const c = new Circle(3);
c.draw();