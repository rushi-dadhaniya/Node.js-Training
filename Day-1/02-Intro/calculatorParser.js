var parser


module.exports = function(){
    var operands = [];
    var operators = [];

    return {

        parse : function(contents) {
                var lines = contents.split("\n");
                for(var  i = 0 ; i  < lines.length ; i++) {
                var operandsOperator = lines[i].split(",");
                operands.push(operandsOperator[0]);
                operators.push(operandsOperator[1]);
            }
        },

        getOperands : function() {
            return operands;
        },


        getOperators : function() {
            return operators;
        },
    }
}

module.exports = {
    parse : function(fileName, callback){

    }
}















