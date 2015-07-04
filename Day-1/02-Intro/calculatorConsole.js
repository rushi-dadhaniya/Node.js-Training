var calculator = require("./calculator")();
var calculatorParser = require("./calculatorParser")();
var fileReader = require("./fileReader.js")();

var contents = fileReader.read();
calculatorParser.parse(contents);
var operands = calculatorParser.getOperands();
var operators = calculatorParser.getOperators();

for(var i= 0 ; i < operands.length ; i++) {
    calculator[operators[i]](operands[i]);
}
console.log(calculator.getResult());
