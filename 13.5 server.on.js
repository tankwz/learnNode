const httpc = require('http');

const server = httpc.createServer();

server.on('request', (req, res) => {
  res.end('welcome');
});

server.listen(5000);
