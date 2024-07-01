// Strings and it's properties

// 1. length
function getlength(x){
    console.log(x);
    console.log(x.length);
}

function strLength(s) {
    var length = 0;
    while (s[length] !== undefined)
      length++;
    return length;
  }
  
  console.log(strLength("Hello")); // 5
  console.log(strLength("")); // 0
getlength('shubhalakshmi');
getlength(`adam d  'anglo`) // but if i don't need to print single quote we can use \
// getlength(`adam d\' anglo') // but if i don't need to print single quote we can use \

// 2. indexof and 3. lastIndexOf
function getindex(x,y){
    console.log(`index is` , x.indexOf(y));
    console.log(` last y index is` , x.lastIndexOf(y));
}
// note: these properties are case sensitive you have to write code capital small as it like
getindex(`binay puthal puthal`, `puthal`);

// 4.slice
function getslice(x,y,z){
    console.log(x.slice(y,z));
}
// how this strings works expended code
function exindex(x,y,z){
    let newstr = "";
    for(let i = 0 ; i<x.length; i++){
        if(i>=y && i<z){
            newstr = newstr + x[i];
        }
    }
    console.log(x);
    console.log(newstr);
}
exindex('responsibility' , 1 ,5);

getslice("subhalakshmi" , 5 , 12); // last 12 doesn't included in return

// 5. replace
function toreplace(x,y,z){
    console.log(x);
    console.log(x.replace(y,z));
}
toreplace('i am perfect', 'perfect', 'not perfect');

// 6. split
const k ="hello i am a pro coder";
const ge = k.split("a"); // a is a delimeter it's splits acc. to this
console.log(ge); // [ 'hello', 'i', 'am', 'a', 'pro', 'coder' ]
const g =`hello i am a pro coder`;
const ke = g.split(""); // delimeter is empty 
console.log(ke); //[
//     'h', 'e', 'l', 'l', 'o',
//     ' ', 'i', ' ', 'a', 'm',
//     ' ', 'a', ' ', 'p', 'r',
//     'o', ' ', 'c', 'o', 'd',
//     'e', 'r'
//   ] this is the output only because of space in split""
// Looks like you're using JavaScript to split a string into an array.
//  In the first example, you're splitting the string k by spaces,
//   resulting in an array where each word is an element. In the second example,
//    you're splitting the string g by empty string "",
//     which means each character becomes an element in the resulting array.

// 7. trim
const e = "     hello i am       binay kumar     puthal     ";
console.log(e.trim("")); // only it's trim start and end only.