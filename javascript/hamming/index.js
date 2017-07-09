// Define your Hamming class here.
// `npm test` to ensure the unit tests pass and
// your code meets all of the conditions.
// You may use ES6 or ES5 to solve.
const Hamming = function() {};
Hamming.prototype.compute = function(strand1, strand2) {
    let distance = 0;
    if (strand1.length == strand2.length) {
        for (i = 0; i < strand1.length; i++) {
            if (strand1[i] !== strand2[i]) distance++;
        }
    } else {
        throw new Error("DNA strands must be of equal length.");
    }
    return distance;
};

module.exports = Hamming;
