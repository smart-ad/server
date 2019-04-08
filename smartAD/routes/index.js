const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
  console.log("start the server usin the port 3000");
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.emit("hello", {hello : "world!"});
  socket.on("first", function(data) {
    
    console.log(data);
  });
});