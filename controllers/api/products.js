const Product = require('../../models/product');

module.exports = {
  getAll,
}

async function getAll(req, res) {
  const products = await Product.find({});
  res.status(200).json(products);
}
