var calculator = require("./calculator");
module.exports.add = function(test) {
    var number1 = 100,
        number2 = 200,
        expectedResult = 300;
    var result = calculator.add(number1, number2);
    test.equal(result, expectedResult, "failed");
    test.done();
}
