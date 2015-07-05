var urlUtil = require("./URLUtil")();
var calculator = require("./calculator")();
var querystring = require("querystring");
function getCalculatorRequestHandler() {
    
    return {
        
        handleGETRequest : function(req, res) {
            
            req.query = urlUtil.getRequestQuery(req);
            var number1 = parseInt(req.query.number1,10);
            var number2 = parseInt(req.query.number2,10);
            var operation = req.query.operation;
            console.log("query:" + req.query);
            console.log("operation:" + operation);
/*
            this.performCalculation(number1, number2, operation);
            this.writeResponse(calculator.getResult().toString());*/
            
                calculator[operation](number1);
                calculator[operation](number2);
                
                res.write(calculator.getResult().toString());
                res.end();
            
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

//                this.performCalculation(number1, number2, operation);
//                this.writeResponse(calculator.getResult().toString());
                
                calculator[operation](number1);
                calculator[operation](number2);
                
                res.write(calculator.getResult().toString());
                res.end();
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