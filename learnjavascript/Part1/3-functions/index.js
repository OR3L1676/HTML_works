// Function Declaration
function walk() {
    console.log('walk');
}

// Function Expression
let run = function() { 
    console.log('run')
};
let move = run;
run()
move()

// Hoisting proccess putting all the function declaration in the first lines of the 
// code, and then we can to call the those kind of functions before the declare