const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('asd');
  res.status(200).send('home');
});

app.get('/about', (req, res) => {
  res.status(200).send('about');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found </h1>');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
