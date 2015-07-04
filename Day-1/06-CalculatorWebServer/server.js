var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var querystring = require("querystring");
var calculator = require("./calculator")();
var staticResourceExtensions = [".html", ".css", ".js", ".png", "ico", ".txt"];

/*
data parse

serving static resources

serving /calculator requests

not found response */

function isStaticResource(resource) {
    var extension = path.extname(resource);
    return staticResourceExtensions.indexOf(extension) !== -1;
}


var server = http.createServer(function(req, res) {

    req.url = url.parse(req.url);
    req.query = querystring.parse(req.url.query);
    var resourcePath = path.join(__dirname, req.url.pathname);
    var extName = path.extname(req.url);

    if(isStaticResource(req.url.pathname)) {
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
    }
    else if(req.url.pathname === "/calculator" && req.method === "GET") {

        var number1 = parseInt(req.query.number1,10);
        var number2 = parseInt(req.query.number2,10);
        var operation = req.query.operation;


        calculator[operation](number1);
        calculator[operation](number2);
        res.write(calculator.getResult().toString())
        res.end();

    }
    else if(req.url.pathname === "/calculator" && req.method === "POST") {

        var input = '';
        req.on('data', function(chunk){
           input += chunk;
        });
        req.on('end', function() {
            req.body = querystring.parse(input);
            var number1 = parseInt(req.body.number1,10);
            var number2 = parseInt(req.body.number2,10);
            var operation = req.body.operation;

            console.log(operation);

            calculator[operation](number1);
            calculator[operation](number2);
            res.write(calculator.getResult().toString())
            res.end();
        })



    }

    else {
        res.statusCode = 404;
                res.status = "Not found";
                res.write("<h1>He He He File not found....I am really very sorry...</h1>")
                res.end();
    }


});
server.listen(8080);
console.log("Server listning on port 8080");
