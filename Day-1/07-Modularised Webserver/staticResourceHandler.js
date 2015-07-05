var urlUtil = require("./URLUtil")();
var fs = require("fs");
var bad404RequestHandler = require("./404RequestHandler")();

function getStaticResourceHandler() {
    
    return {
        
        handleRequest : function(req, res) {
            
            if(fs.existsSync(urlUtil.getResourcePath(req))) {
                fs.createReadStream(urlUtil.getResourcePath(req)).pipe(res);
            }
            else {
                bad404RequestHandler.handle404(req, res);
            }
        }
        
    }
    
};

module.exports = getStaticResourceHandler;