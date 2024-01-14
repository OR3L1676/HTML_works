
const _edges = new WeakMap();
const _radius = new WeakMap();

class Shape {
    constructor(edges) {
        if(edges < 0) {
            throw new Error('Invalid edges')
        } else {
            _edges.set(this, edges);
        }
    }
    move() {
        console.log('move')
    }
    get edges() {
        return _edges.get(this);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(0);
        if(radius <= 0) {
            throw new Error('Invalid radius')
        } else {
            _radius.set(this, radius);
        }
    }
    draw() {
        console.log('draw');
    }
}


const c = new Circle(1);
c.move();
c.draw();
console.log(c.edges);

const s = new Shape(0);
console.log(s.edges);