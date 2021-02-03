const Order = require('../../models/order');

module.exports = {
  getOrders,
}

async function getOrders(req, res) {
  const orders = await Order.find({user: req.user._id});
  console.log(orders)
  res.json(orders); 
}
