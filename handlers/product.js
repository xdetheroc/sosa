const serverless = require('serverless-http');

const express = require('express');

const app = express();

const productDAO = require('../daos/product');

app.use(express.json());

app.get('/api/products', async (req, res) => {
  let response = { success: false };
  try {
    const data = await productDAO.getProducts();
    response = { success: true, data };
  } catch (err) {
    response.message = err.message;
  } finally {
    res.json(response);
  }
});

module.exports.handler = serverless(app);
