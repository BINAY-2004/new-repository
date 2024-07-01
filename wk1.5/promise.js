// const fs = require('fs');

// function kiratReadFile(){
//     console.log("inside the kiratfile");
//     return new Promise(function(resolve){
//         console.log("inside promises");
//         fs.readFile("a.txt","utf-8", function(err,data){
//             console.log("before resolve");
//             resolve(data);
//         });

    
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// var a = kiratReadFile();
// console.log(a);
// console.log(a.then(onDone));

var d = new Promise(function(resolve){
    resolve("success");
});

function callback(){
    console.log(d);
}
d.then(callback);