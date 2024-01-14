const _items = new WeakMap();

class Stack {
    constructor() {
        this.count = 0;
        _items.set(this, [])
    }

    peek() {
        if(_items.get(this).length === 0) {
            throw new Error('Stack is empty');
        } else {
            return _items.get(this)[_items.get(this).length - 1];
        }
    }  
    pop() {
        if(_items.get(this).length === 0) {
            throw new Error('Stack is empty');
        } else {
            this.count--;
            return _items.get(this).pop();
        }
    }
    push(value) {
       _items.get(this).push(value);
        this.count++;
    }
}

const s = new Stack();
s.push('a');
s.push('b');
console.log(s.count); 
console.log(s.peek()); 
s.pop();
console.log(s.count); 
console.log(s.peek()); 