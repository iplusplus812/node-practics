var http = require('http');
var options = {
	host: "www.baidu.com",
	port: 80,
	path: "/index.html"
};

http.get(options, function(res) {
	console.log('Got response:', res.headers, res.httpVersion);
	res.on('data', function(data) {
		console.log('Get Data:', data.toString());
	});
});