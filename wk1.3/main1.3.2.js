// date
//  const cntdate = new Date();
// console.log(cntdate.getDate());
// console.log(cntdate.getMonth());
// console.log(cntdate.getFullYear());
// console.log(cntdate.getHours());
// console.log(cntdate.getMinutes());
// console.log(cntdate.getSeconds());
//  let l =cntdate.getMonth() +1;
//  let k =cntdate.getDate();
//  let p =cntdate.getFullYear();

//  console.log("Today date is " + k+l+p);

//  const crtdate = new Date();
//  console.log(crtdate.getTime());

 // how to calculate how much time a code to run

 function calculate(){
    let a = 0;
    for(let i = 0 ; i<12356895;i++){
        (a+=i)*(a+=i);
        }
        return a;
 }
 
 
 const bfdata = new Date();
 const bftimeinms = bfdata.getTime();
 console.log(bftimeinms);
 let p = calculate()
 //console.log(p);
 const afdata = new Date();
 const aftimeinms = afdata.getTime();
 console.log(aftimeinms);
 
console.log(aftimeinms - bftimeinms);

