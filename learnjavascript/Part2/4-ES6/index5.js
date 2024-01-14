
const _radius = Symbol('radius');
const _draw = Symbol('draw()');
class Circle {
    constructor(radius) {
        // this.radius = radius;
        this[_radius] = radius;
    }
    [_draw]() {
        console.log('draw');
    }
    draw2() {
        this[_draw]();
    }
}

const c = new Circle(1);
c.draw2()
// now the radius property is kinda private