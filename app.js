var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('webrtcwwsocket-key.pem'),
  cert: fs.readFileSync('webrtcwwsocket-cert.pem'),
};

var serv = https.createServer(options, function(req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }   
    res.writeHead(200);
    res.end(data);
  }); 
});

var io = require('socket.io').listen(serv);
serv.listen(443, '0.0.0.0');

io.sockets.on('connection', function(socket) {
  socket.on('message', function(message) {
    console.log(message);
    socket.broadcast.emit('message', message);
  });
});
