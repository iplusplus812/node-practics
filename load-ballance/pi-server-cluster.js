var args = process.argv.splice(2);
var http = require('http');
var cluster = require('cluster');
var numberOfCpus = require('os').cpus().length;
var seaport = require('seaport');
var ips = require('./gethostip.js')();


var ports = seaport.connect('172.16.2.144', 9090);



if (cluster.isMaster) {
	for (var i = 0; i < numberOfCpus; i++) {
		cluster.fork();

	}
	var port = ports.register('pi-server');
	console.log('port reged :', port);

	cluster.on('online', function(worker) {
		console.log('worker id = ' + worker.process.pid + ' is online');
		worker.send(port);
	});
} else {
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
		//console.log(v);
		res.end('Pi: ' + v);
	});
	process.on('message', function(p) {
		var port = parseInt(p) || 8001;

		server.listen(port, ips[0]);
		console.log('Server start listen on port :' + port + " at " + ips[0]);
	});
}