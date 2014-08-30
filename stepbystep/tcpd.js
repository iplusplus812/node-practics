var server = require('net').createServer();
var port = 5001;

var socket = {};

server.on('listening', function() {
  console.log('server is listening on port : ', port);
});

server.on('connection', function(s) {
  console.log("Server has a new connection");
  socket = s;
  socket.write("welcome!", 'utf-8');
  socket.on('data', function(data) {
    console.log(data.toString());
    socket.write(data);
    if (data.toString() == 'bye') {
      socket.end();
      server.close();
    }


  });
});



server.on('close', function() {
  console.log('Server is now closed');
});

server.on('error', function(err) {
  console.log('Error occurred:', err.message);
});

server.listen(port);