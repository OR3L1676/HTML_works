
let intrestRate = 0;
changetext =()=> {
    let x = document.getElementById("h1");
    let y = document.getElementById("h1").innerHTML;
    let arr = ['Hello World', 'The World has changed'];
    if (y == "Hello World") {
        x.innerHTML = arr[1];
        console.log(arr[1]);

    } else {
        x.innerHTML = arr[0];
        console.log(arr[0]);
    }
    intrestRate = intrestRate + 1;
    console.log(intrestRate);
    
  }

//   let bool = {
//     m: true,
//     mode(){
//      this.m = !this.m;
//     } 
// }

// function changetext() {
//     bool.mode();
//     if(bool.m) {
//         let btn = document.getElementById("h1").innerHTML = 'i made it';
//     } else {
//         let btn = document.getElementById("h1").innerHTML = 'kabab';
//     }
    

// }
  