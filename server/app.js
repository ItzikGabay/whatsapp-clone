// Global imports
const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// Express app
app.get('/', function(req, res) {
   res.send('works')
});

// Whenever someone connects
io.on('connection', function(socket) {
  console.log('A user connected');

  // Whenever someone disconnects
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});

http.listen(5000, function() {
   console.log('listening on *:5000');
});