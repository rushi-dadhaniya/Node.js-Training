var urlUtil = require("./URLUtil")();
var calculator = require("./calculator")();
var querystring = require("querystring");
function getCalculatorRequestHandler() {
    
    var obj = {};
    
    return {
        
        handleGETRequest : function(req, res, calcRef) {
            
            req.query = urlUtil.getRequestQuery(req);
            var number1 = parseInt(req.query.number1,10);
            var number2 = parseInt(req.query.number2,10);
            var operation = req.query.operation;
           
            calcRef.performCalculation(number1, number2, operation);
            calcRef.writeResponse(res, calculator.getResult().toString());
            
        },
        
        handlePOSTRequest : function(req, res) {
            var input = '';
            req.on('data', function(chunk){
               input += chunk;
            });
            req.on('end', function() {
                req.body = urlUtil.getRequestBody(input);
                var number1 = parseInt(req.body.number1,10);
                var number2 = parseInt(req.body.number2,10);
                var operation = req.body.operation;

                calcRef.performCalculation(number1, number2, operation);
                calcRef.writeResponse(res, calculator.getResult().toString());

            });

        },
        
        performCalculation : function(number1, number2, operation) {
            calculator[operation](number1);
            calculator[operation](number2);
        },
        
        writeResponse : function(res, data) {
            res.write(data);
            res.end();
        }
        
    }
    
};


module.exports = getCalculatorRequestHandler;