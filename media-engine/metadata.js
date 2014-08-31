var ffmpeg = require('fluent-ffmpeg');

ffmpeg.ffprobe('./medias/output/lily.flv', function(metadata, err) {
	console.log(require('util').inspect(metadata));
});