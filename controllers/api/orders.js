const Order = require('../../models/order');

module.exports = {
  getOrders,
}

async function getOrders(req, res) {
  const orders = await Order.find({user: req.user._id});
  res.json(orders); 
}
