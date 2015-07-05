function get404RequestHandler() {
    
    return {
        
        handle404 : function(req, res) {
            
            res.statusCode = 404;
            res.status = "Not found";
            res.write("<h1>He He He File not found....I am really very sorry...</h1>")
            res.end();
            
        }
        
    }
    
};

module.exports = get404RequestHandler;