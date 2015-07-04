var calculator = {
    result : 0,

    add : function(x){
        this.result += x;
    },
    subtract : function(x){
        this.result -= x;
    },
    multiply : function(x,y){
        this.result *= x;
    },
    divide : function(x,y){
        this.result /= x;
    },

    getResult : function(){
        return this.result;
    }

};

module.exports = calculator;
