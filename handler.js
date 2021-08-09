const serverless = require('serverless-http');

const express = require('express');

const app = express();

const process = require('./process');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/products', async (req, res) => {
  let response = { success: false };
  try {
    const data = await process.getProducts();
    response = { success: true, data };
  } catch (err) {
    response.message = err.message;
  } finally {
    res.json(response);
  }
});

module.exports.products = serverless(app);
