const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log('draw');
    }
}

module.exports.Circle = Circle;
// modoule.export = Circle // shorter way