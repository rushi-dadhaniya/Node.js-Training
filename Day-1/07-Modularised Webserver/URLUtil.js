var url = require("url");
var path = require("path");
var querystring = require("querystring");

function getURLUtil() {
    
    var staticResourceExtensions = [".html", ".css", ".js", ".png", "ico", ".txt"];
    
    return {
        
            getRequestUrl : function(req) {
              return url.parse(req.url);  
            },
        
            getUrlPathName : function(req) {
                return this.getRequestUrl(req).pathname;
            },

            getExtension : function(req) {
                return path.extname(this.getUrlPathName(req));
            },
        
            isStaticResource : function(req) {
                return staticResourceExtensions.indexOf(this.getExtension(req)) !== -1;
            },
        
            getResourcePath : function(req) {
                return path.join(__dirname, this.getUrlPathName(req));
            },
        
            getRequestQuery : function(req) {
                req.url = url.parse(req.url);
                req.query = querystring.parse(this.getRequestUrl(req).query);
                return req.query;
            },
        
            getRequestBody : function(input) {
                return querystring.parse(input);
            }
        
        }
};

module.exports = getURLUtil;