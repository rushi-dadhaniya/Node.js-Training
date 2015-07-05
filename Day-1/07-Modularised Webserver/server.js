var http = require("http");
var urlUtil = require("./URLUtil")();
var staticResourseHandler = require("./staticResourceHandler")();
var bad404RequestHandler = require("./404RequestHandler")();
var calculatorRequestHandler = require("./calculatorRequestHandler")();
/*                                       
data parse

serving static resources

serving /calculator requests

not found response */

var server = http.createServer(function(req, res) {

    if(urlUtil.isStaticResource(req)) {
        staticResourseHandler.handleRequest(req, res);
    }
    else if(urlUtil.getUrlPathName(req) === "/calculator" && req.method === "GET") {
        calculatorRequestHandler.handleGETRequest(req, res);
    }
    else if(urlUtil.getUrlPathName(req) === "/calculator" && req.method === "POST") {
        calculatorRequestHandler.handlePOSTRequest(req, res);
    }

    else {
        bad404RequestHandler.handle404(req, res);
    }

});
server.listen(8080);
console.log("Server listning on port 8080");
