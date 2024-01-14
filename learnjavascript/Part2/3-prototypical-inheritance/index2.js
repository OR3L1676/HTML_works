function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    hunger: 10,
    eat: function() {
        this.hunger--;
        console.log('eating')
    }
}

const canWalk = {
    walk: function() {
        console.log('walk');
    }
}

const canSwim = {
    swim: function() {
        console.log('swim');
    }
}

function Person() {//2
}

mixin(Person.prototype, canEat, canWalk, canSwim);//2
const person = new Person();
console.log(person)

const person2 = new Person();
console.log(person2);