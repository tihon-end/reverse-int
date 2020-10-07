



module.exports = function reverse(number) {
    var positiveNumber = Math.abs(number);
    return +String(positiveNumber).split("").reverse().join("");
};

