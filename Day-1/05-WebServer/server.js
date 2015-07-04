var http = require("http");
var fs = require("fs");
var path = require("path");

var server = http.createServer(function(req, res) {
    var resourcePath = path.join(__dirname, req.url);

    fs.exists(resourcePath, function(exists) {

        if(exists) {
            fs.createReadStream(resourcePath).pipe(res);
        }
        else {
            res.statusCode = 404;
            res.status = "Not found";
            res.write("<h1>He He He File not found....I am really very sorry...</h1>")
            res.end();
        }
    });


});
server.listen(8080);
console.log("Server listning on port 8080");
