// console.log("100x cohort");
// let a = "binay";
// let b = 1;
// let c = false;
// console.log(a + b + c);
// console.log(`my name is ${a} and my age is ${b} and i cheat myself everyday ${c}`);
// let sum = 0;
// for( b;b<100; b++){

//     console.log(b);
//     // sum = sum+b;
//     sum+=b;

// }
// console.log(sum);

//ARRAYS

const user1 = {
    name: "binay",
    p_no: 509268,
    salary: 24000
}
console.log(user1["name"]);
// if we want an array in this formet we can use like this
const userx = [{
    name: "shubham",
    p_no: 509269,
    salary: 24520
}, {
    name: "shibu",
    p_no: 509270,
    salary: 25705
}
    , {
    name: "ansu",
    p_no: 509265,
    salary: 29456
}, {
    name: "amrit",
    p_no: 509266,
    salary: 28945
}, {
    name: "harshan",
    p_no: 509263,
    salary: 30000
}
]
for (let m = 0; m < userx.length; m++) {
    // console.log(userx[m]["name"]),
    // console.log(userx[m]["p_no"]),
    // console.log(userx[m]["salary"]),
    console.log(`name : ${userx[m]["name"]}, 
p_no : ${userx[m]["p_no"]},
salary : ${userx[m]["salary"]} `)
}
// it's an traditional way
// let's do it in a new way
// userx.forEach(user => {
//     console.log(`Name: ${user.name}, Phone Number: ${user.p_no}, Salary: ${user.salary}`);
// });

// callback function
// let a = 2 , b = 3;
// function sum(x , y){
//     let result = x+y;
//     return result;
// }
// function disdata(data){
//     console.log("you result is " + data);
// }
// let v = sum(a,b);
// console.log(sum(a,b));
// console.log(disdata(v));

// let a = 2 , b = 3;
// function sum(x , y){
//     let result = x+y;
//     disdata(result);
// }
// function disdata(data){
//     console.log("you result is " + data);
// }
// sum(a,b);

function square(x){
    return x*x
;
}
function cube(x){
    return x*x*x;
;
}
function result(a,b,fn){
    let k = fn(a);
    let j = fn(b);
    return k+j;
}// aik hee code say we can calculate square and cube both.
let c = result(2,3,cube);
let t = result(3,3,function square(x){
    return x*x
;
}); // --> we can also define the function while calling it.

console.log(c);
console.log(t);

// HARKIRAT BHAIYA STYLE
let a = 2 , b = 3;
function sum(x , y , fntocall){
    let result = x+y;
    fntocall(result);
}
function disdata(data){
    console.log("you result is " + data);
}
sum(a,b,disdata);




function rth(c,r, fnt){
    let result= fnt(c,r);
    return result;
}

function sumation(a1 , b1){
    let result = a1 + b1;
    return result;
}
const value = rth(a,b, sumation);
console.log(value); // here we make sumation function as an argument.

// SETTIMEOUT AND SETINTERVAL FUNCTION
function SubmitEv(){
    console.log("binu")
}
setTimeout(SubmitEv, 5*1000);
//setInterval(SubmitEv, 2*1000); // it print binu in every 2 sec interval

