// object
const circle = {
    radius: 1,
    location: [{
        x: 12,
        y: 1
    }, {z: 'hello there'}],
    draw() {
        console.log('draw');
    }
};


console.log(circle.location[1].z);

// factory function
function createCircle(radius, x, y) {
    return {
        radius,
        location: {x, y},
        draw() {
            console.log('draw');
        }
    }
}

const circle2 = createCircle(3, 1, 2);
console.log(circle2)

//constructor function
function Circle(radius, x, y) {
    let _radius = radius;
    let location = {x: x, y: y};
    this.draw = function() {
        console.log('draw')
    }
    Object.defineProperty(this, 'getLocation', {
        get: function() {
            return location;
        },
        set: function(value) {
           let value1 = value*2;
            let value2 = value/2;
            location = {x: value1, y: value2}
        }
    }) 

    Object.defineProperties(this, {
        'getRadius' : {
            get: function() {
                return _radius;
            }
        }
    })
}

const another = new Circle(4, 2, 3);
console.log(another);
console.log(another.getLocation)
console.log(another.getRadius)
another.getLocation = 4
console.log(another.getLocation)
