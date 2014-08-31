var ffmpeg = require('fluent-ffmpeg');
var fs = require('fs');

var stream = fs.createWriteStream('./medias/output/lily.flv');

var proc = ffmpeg('./medias/input/lily.mp4')
	.preset('flashvideo')
	.on('end', function() {
		console.log('file has been converted succesfully');
	})
	.on('error', function(err) {
		console.log('an erro happened: ' + err.message);;
	})
	.pipe(stream, {
		end: true
	});