const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

//app.use('/', logger, authorize);
app.use('/api', [logger, authorize]);

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.get('/api/about', (req, res) => {
  console.log(req.user);
  res.send('about');
});

app.listen(5000, () => {
  console.log('listening');
});
