// String primitive
const message = 'This is my first message';

// String Object
const another = new String('hi')


// exercise 1:
// sol 1
const address = {
    street: 'someStreetName',
    city: 'someCityName',
    zipCode: 1234,
    showAddress() {
        console.log(`
        The Address is: 
        City: ${this.city} 
        Street: ${this.street}
        Zip Code: ${this.zipCode}`);
    }
}
// sol 2
function showAddress2(address) {
    console.log('The Address is:')
    for (const key in address) {
        console.log(key, address[key])
    }
}
address.showAddress();
showAddress2(address);