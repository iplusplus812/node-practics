var fs = require('fs');
var options = {
	key: fs.readFileSync('client_key.pem'),
	cert: fs.readFileSync('client_cert.pem')
};

var tls = require('tls');
var host = 'localhost';
var port = 7001;
var client = tls.connect(port, host, options, function() {
	console.log('connected');
	console.log('authorized:' + client.authorized);
	if (!client.authorized) {
		console.log('client denied access: ', client.authorizationError);
	} else {
		client.write('Hey, there');
		client.on('data', function(data) {
			console.log('Got some data from the server: ', data);
		});
	}
});