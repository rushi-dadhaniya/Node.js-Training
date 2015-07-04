var fs = require("fs");

module.exports = function() {
    return {

        read : function() {
                fs.readFile("calculatorData.csv", {encoding : "utf-8"}, function(err, contents) {
                    if(err) {
                        console.log("expected error",err);
                    }
                    else {
                        return contents;
                    }
                });
}
    }
}
