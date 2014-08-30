var http = require('http');
var util = require('util');
var fs = require('fs');

var server = http.createServer();
server.on('request', function(req, res) {
  res.writeHead(200, {
    'Content-type': 'video/mp4'
  });
  
  var rs=fs.createReadStream('test.mp4');
  rs.pipe(res);
  
});
server.listen(4000);