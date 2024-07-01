// complex primitives
// Q1. write a program to print all the even numbers in an array.

let arr1 = [ 10,22,53,71,86,0,1];
for(let a = 1 ; a<= arr1.length ; a++){
    if(arr1[a-1]!= 0){
    if(arr1[a-1]%2 == 0){
        console.log(arr1[a-1]);
    }
    else{

    }
}
}

// Q2. Write a program to print biggest number in an array

arr1.sort((a, b) => a - b);
console.log(arr1); // it is for arrange in ascending order

let max = arr1[0];
for(let a = 0 ; a<= arr1.length ; a++){
    if(arr1[a]>max){
        max = arr1[a];
    }
}
console.log(`the biggest number in this array is ${max}`);

// Q3. write a program that prints all the people first name whos salary goes above 25000 ?
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
console.log(userx[0].name.length);
for(let i = 0 ; i<userx.length ; i++){
    if(userx[i].salary > 28000){
        console.log(userx[i].name);
    }
    else{
        console.log("yu are poor do hardwork");
    }
}

// Q4. write a program that reverse all the elements in an array ?

let arr2 = [ 10,22,53,71,86,0,1];
const k = arr2.length;
for(let i = 0 ; i<=k; i++){
    console.log(arr2[k-i]);
}