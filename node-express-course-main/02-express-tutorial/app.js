const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1> home </h1> <a href ="/api/products">product</a>');
});

app.get('/api/products', (req, res) => {
  const newProd = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProd);
});

app.get('/api/products/:productID', (req, res) => {
  const singleProduct = products.find(
    (products) => products.id === Number(req.params.productID)
  );
  if (!singleProduct) {
    return res.status(404).send('product not found');
  }
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log('listening');
});
