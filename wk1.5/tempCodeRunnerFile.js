const fs = require("fs");
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})
console.log("i will be an millioniare first.");