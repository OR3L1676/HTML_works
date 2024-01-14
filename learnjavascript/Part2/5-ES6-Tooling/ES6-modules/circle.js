const _radius = new WeakMap();

export class Circle {
    constructor(radius) {
        _radius.set(this, radius);
    }
    draw() {
        console.log('draw');
        console.log('radius: ',_radius.get(this))
    }
}
