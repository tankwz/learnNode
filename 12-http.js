const http = require('http');
const server = http.createServer((req, res) => {
  if(req.url==='/'){
    res.end ('welcome to home page')
  }
  else if (req.url==='/about'){
    res.end ('about page')
  }
  else res.end(`<h1>oops!</h1> <p>wrong page</p>
  <a href='/'> bacc`)
})




server.listen(5000);