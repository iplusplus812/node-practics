var args = process.argv.splice(2);
var http = require('http');
var cluster = require('cluster');
var httpProxy = require('http-proxy');
var seaport = require('seaport');
var ips = require('./gethostip.js')();

var numberOfCpus = require('os').cpus().length;

if (cluster.isMaster) {
	for (var i = 0; i < numberOfCpus; i++) {
		cluster.fork();
	}
} else {

	var ports = seaport.connect('172.16.2.144', 9090);
	var i = -1;
	var proxy = httpProxy.createServer();
	var port = args[0] || 8000;
	http.createServer(function(req, res) {
		var addresses = ports.query('pi-server');

		if (!addresses.length) {
			res.writeHead(503, {
				'Content-Type': 'text/plain'
			});
			res.end('Sevice unavailable');
			return;
		}
		i = (i + 1) % addresses.length;
		console.log("Proxy to " + addresses[i].host);
		proxy.web(req, res, {
			target: addresses[i]
		});

	}).listen(port, ips[0]);
	console.log('Server start listen on port :' + port + " at " + ips[0]);
}