var util = require('util');
var Mathbase = function() {};
Mathbase.prototype.add = function(a, b) {

	return a + b;
};
Mathbase.prototype.sub = function(a, b) {
	return a - b;
};


var Math2 = function() {};
util.inherits(Math2, Mathbase);
Math2.prototype.mul = function(a, b) {
	return a * b;
};

exports = Math2;