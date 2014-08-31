var ffmpeg = require('fluent-ffmpeg');

var proc = ffmpeg('./medias/input/lily.mp4')
	.size('150x?')
	.on('end', function(files) {
		console.log('screenshots were saved as ' + files.join(', '));
	})
	.on('error', function(err) {
		console.log('an error happened : ' + err.message);
	})
	.takeScreenshots({
		count: 2,
		timemarks: ['00:00:02.000', '6']
	}, './medias/output/thumbs');