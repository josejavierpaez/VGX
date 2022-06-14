const express = require('express');
const { fibonacci } = require('../util/fiboGenerator');
const Router = express.Router();

Router.get('/generator/:value', (req, res) => {
  const result = fibonacci(Number(req.params.value));
  return res.json({ result });
});

module.exports = Router;
