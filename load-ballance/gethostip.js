var os = require('os')
var interfaces = os.networkInterfaces();

function getHostIps() {
	var addresses = [];
	for (k in interfaces) {
		for (k2 in interfaces[k]) {
			var address = interfaces[k][k2];
			if (address.family == 'IPv4' && !address.internal) {
				addresses.push(address.address)
			}
		}
	}
	//console.log(addresses);
	return addresses;
}



module.exports = getHostIps;