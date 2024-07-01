// numbers
//parseint and parseFloat is a function which convert an string into an integers

//.log(parseInt("2.12"))
// console.log(parseInt("2.12abda"))
// console.log(parseInt("2jabda.12"))
// console.log(parseInt("2jabda12"))
// console.log(parseInt("jadma2.12"))

// console.log(parseFloat("2.12"))
// console.log(parseFloat("2.12abda"))
// console.log(parseFloat("2jabda.12"))
// console.log(parseFloat("2jabda12"))  
// console.log(parseFloat("jadma2.12"))

// arrays

// 1 . push --> adding number end of an array
const z = [254,389,1000];
z.push(2);
console.log(z);
console.log(z.length);

z[z.length] = 34;
console.log(z);

// 2. pop --> removing number from end of an array
z.pop(); // this prints 34
console.log(z);  // this prints left array after removing

let z = [254,389,1000.1,2,3,4,5,6,7,8,9];
 z.length = z.length - 1;

 console.log(z);

// 3. shift & unshift --> to remove from front and add
z.shift();
console.log(z);

z = z.slice(1);
console.log(z); // to remove from front


z.unshift(24);
console.log(z);

for(let  i = z.length -1 ; i>=0 ; i--){
    z[i+1] = z[i];
} // to add in front
z[0]= 69;
console.log(z);
// to add in middle or another position we need splice

//  4. concat --> to merge two arrays
let m =[1,2,3,4];
let n =[5,6,7,8];
console.log(m.concat(n));
let p = [...m , ...n]; // SPREAD OPERATOR
console.log(p);

let q = [];
for(let i = 0;i<m.length ; i++){
    q.push(m[i]);
}
console.log(q);
for(let i = 0;i<n.length ; i++){
    q.push(n[i]);
}
console.log(q);

// 5. forEach
 let s = [23,34,45];
 function log(str){
    console.log(str);
 }
s.forEach(log);
// this is equivalent to 
//log(23), log(34),log(45),

function forEachExample(arr) {
    console.log("Original Array:", arr);
  
    arr.forEach(function(item, index) {
      console.log(item, index);
    });
  }
  forEachExample([1, 2, 3]);

  // Classes and Objects

class employee{
    constructor(name,salary,code){
        this.name = name;
        this.salary = salary;
        this.code = code;
    };
    dhaan(){
        console.log("my dhhan is " + this.salary);
    }
}
//  let employee = {
//     name : "binay",
//     salary : 25000,
//     code : 254,

// }
// console.log(employee["salary"]);
// INSTEAD OF THIS WE USING THIS CLASS AND OBJECTS
let ram = new employee("ram" , 25000 , 345);
console.log(ram["salary"]);

ram.dhaan();