var request = require('request');

request('http://www.baidu.com', function(error, res, body) {
	console.log(res.headers);
	console.log(body);
});