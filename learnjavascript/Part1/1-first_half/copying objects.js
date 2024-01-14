 const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }    
}

// const another = {}
// for(let key in circle) {
//     another[key] = circle[key];
// }
// console.log(another) // this is a old technique so we doing going to use it

// const another = Object.assign({
//     color: 'yellow'
// }, circle); // this is a not elegant way to do this by mosh to clone 1 object
//                but this good for multiply objects

// heres the simplest way to clone object
const another = { ...circle }
console.log(another)
