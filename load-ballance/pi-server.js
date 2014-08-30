var args = process.argv.splice(2);
var http = require('http');

function estimatePi() {
	var n = 10000000,
		inside = 0, i, x, y;

	for (i = 0; i < n; i++) {
		x = Math.random();
		y = Math.random();
		if (Math.sqrt(x * x + y * y) <= 1) {
			inside++;
		}
	}
	return 4 * inside / n;
}

var server = http.createServer(function(req, res) {

	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	var v = estimatePi();

	res.end('Pi: ' + v);
});

server.listen(args[0] || 8000);