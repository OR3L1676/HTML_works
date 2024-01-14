const person = {
    firstName: 'Orel', 
    lastName: 'Sabash',
    get fullName() { // changing to fullname() to -> get fullname()
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
       if(typeof(value) !== 'string'){
        throw new Error('Value is not a string.');
       }
       const parts = value.split(' ');
       if(parts.length < 2) {
        throw new Error('Enter first and last names');
       }
       this.firstName = parts[0];
       this.lastName = parts[1];
    }
};
try {
    person.fullName = '';
} catch(e) {
    alert(e)
}
console.log(
    `Hello my name is: ${person.fullName}.`
    )

// getters => access properties
// setters => change (mutate) them
