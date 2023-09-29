const http = require('http');
const { readFileSync } = require('fs');

//get all file
const homepage = readFileSync('./navbar-app/index.html');
const homepagestyle = readFileSync('./navbar-app/styles.css');
const homepagejs = readFileSync('./navbar-app/browser-app.js');
const homepagelogo = readFileSync('./navbar-app/logo.svg');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homepage);
    res.end();
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    res.write(homepagestyle);
    res.end();
  } else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });
    res.write(homepagejs);
    res.end();
  } else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });
    res.write(homepagelogo);
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(`<h1>about page </h1>`);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write(`<h1>error 404: page not found</h1>`);
    res.end();
  }
});

server.listen(5000, () => {
  console.log('listening at 5000');
});
