function sum(discount, ...prices) {
  const total = prices.reduce((a, b)=> a + b);
  return total * (1 - discount);
}
console.log(sum(0.1,20,30))


// different lesson
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years
}

console.log(interest(10000, 3.5, 5));
// there is a tric to send (1000, undifined, 5), when we have (prinsipal, rate = 3.5, years)

