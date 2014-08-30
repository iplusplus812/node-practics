var spawn = require("child_process").spawn;
var child = spawn('tail',['-f','/var/log/system.log']);

child.stdout.on('data',function  (data) {
	console.log('tail output: ', data);
});

