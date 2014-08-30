var util = require('util');
var net = require('net');
var port = 5001;
var conn = net.createConnection(port,function(c){
	console.log("connected");
});

conn.on("data",function(data){
	console.log(data.toString());
});

process.stdin.resume();
process.stdin.pipe(conn);

