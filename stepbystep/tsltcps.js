var tls = require('tls');
var fs = require('fs');
var mathlib = require('./libMath');
var serverOptions = {
	key: fs.readFileSync('./pk_key.pem'),
	cert: fs.readFileSync('./my_cert.pem')
};

var server = tls.createServer(serverOptions);
var port = 7001;
server.listen(port);

server.on('secureconnection', function(stream) {
	console.log('got a new connection');
	stream.write('Hello.\n');

	server.on('data', function(data) {
		console.log('Got some data from the client:', data.toString());
		if (data.toString().trim().toLowerCase() === 'bye') {
			stream.end('Bye bye!');
		}
	});
});