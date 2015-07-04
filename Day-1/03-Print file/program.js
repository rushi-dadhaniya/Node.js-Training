var fs = require("fs");
/*

fs.readFile("test.txt", {encoding : "utf-8"}, function(err, contents) {
    
    if(err) {
        console.log("expected error",err);
    }
    
    console.log(contents);
    
})*/

var readCount = 0;
var stream = fs.createReadStream("test.txt", {encoding : "utf-8"});
/*stream.on("data", function(chunk) {
    ++readCount;
   console.log(chunk); 
});
stream.on("end", function() {
   console.log("EOF with readCount : " + readCount); 
});*/

stream.pipe(process.stdout);