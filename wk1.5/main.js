 // LOOPS
  // sum of first 100 natural numbers

//   let sum = 1, n = 100;
//   let get = (sum+n)*(n/2);
//   console.log(get);

// syncronous and asyncronous function

function sum(a){
    let add=0;
    for(let i = 0 ; i<a ;i++){
        add+=i;
    }
    return add;
}
function suma(){
    console.log(sum(10));
}
function ok(){
    console.log("nu nu gaam")
}
setTimeout(suma, 10000);// --> WE can't direct call the function we must use other reference
setTimeout(ok, 5000);// --> it's an async func.
console.log("run ho jaa"); // THIS IS AN ASYNC FUNC.


function sum(a){
    let add=0;
    for(let i = 0 ; i<a ;i++){
        add+=i;
    }
    return add;
}
// let r = sum(10000000000); //--> jab tak yeh code complete nahi hoga  code agay nahi badhyga
// console.log(r);
function rum(){
    console.log(sum(10000000000));
}
setTimeout(rum, 2000); 
console.log("run ho jaa"); // THIS IS AN sync FUNC.

const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})
console.log("i will be an millioniare first.");