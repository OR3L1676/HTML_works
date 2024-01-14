// Prototypes

function Circle(radius) {
    //Instance members
    this.radius = radius;
    this.move = function() {
        console.log('move')
    }
}

// Prototype members
Circle.prototype.draw = function() {  
    console.log('draw');
}


Circle.prototype.toString = function() {
    return 'Circle with radius '  + this.radius;
}

const c1 = new Circle(3);

// return only Instance members
console.log(Object.keys(c1));

// return all members (Instance + Prototype)
for(let key in c1) console.log(key);