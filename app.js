const http = require('http');
const server = http.createServer((req, res) => {
  res.write('hellow')
  res.end()
})




server.listen(5000);