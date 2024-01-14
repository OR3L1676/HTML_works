// 'use strict'

// const Circle = function() {
//     this.counter = 0;
//     this.draw = function() {
//         console.log(this);   
//     }
// };

// const c = new Circle();
// c.draw();
// const draw = c.draw;
// draw();


// strict mode enabled automaticly
class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();