// const app = require('express')();
// const server = require('http').createServer(app);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

// io.on("connection", (socket) => { 
//   console.log('new connection')
// })

// app.get('/', (req, res) => {
//   res.send('working')
// })

// app.listen(5000, () => {
//   console.log('Server started at port 5000')
// })

// const express = require("express");
// const app = express();
// const port = 5000;
// const http = require("http").createServer();
// const io = require("socket.io")(http);
// //Listen for a client connection 
// io.on("connection", (socket) => {
//     //Socket is a Link to the Client 
//     console.log("New Client is Connected!");
//     //Here the client is connected and we can exchanged 
// });

// app.get('/', (req, res) => {
//   res.send('working')
// })

// //Listen the HTTP Server 
// app.listen(port, () => {
//     console.log("Server Is Running Port: " + port);
// });

const app = require('express')();
const http = require('http').Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

app.get('/', function(req, res) {
   res.send('works')
});

//Whenever someone connects this gets executed
io.on('connection', function(socket) {
  console.log('A user connected');

  //Whenever someone disconnects this piece of code executed
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});

http.listen(5000, function() {
   console.log('listening on *:5000');
});