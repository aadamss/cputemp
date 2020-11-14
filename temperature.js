const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const si = require('systeminformation');

const path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', () => {
  console.log('a user connected');
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000.');
});

setInterval(() => {
  si.cpuTemperature().then((tmp) => {
    io.emit('CPU', tmp.main);
    console.log(tmp.main);
  });
}, 1000);
