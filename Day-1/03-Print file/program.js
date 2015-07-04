var fs = require("fs");

fs.readFile("test.txt", {encoding : "utf-8"}, function(err, contents) {
    
    if(err) {
        console.log("expected error",err);
    }
    
    console.log(contents);
    
})