let z = [254,389,1000, 25,36,45,75];
console.log(z.length);
console.log(z.indexOf(1000));


//  z.length = z.length - 1;

//  z = z.slice(1);
//  console.log(z);
// z[0]= 23;
//  console.log(z); //[
//     23, 389, 1000,
//     25,  36,   45,
//     75
//   ]

// for(let i = z.length -1 ; i>=0 ; i--){
//     z[i+1] = z[i];
// }

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