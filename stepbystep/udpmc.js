var server = require('dgram').createSocket('udp4');

server.on('message', function(message, rinfo) {
	console.log('server got message: ' + message + ' from  '
	+ rinfo.address + ' : ' + rinfo.port);
});

server.bind(6003, function() {
	server.addMembership('230.1.2.3');
});