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