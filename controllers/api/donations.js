const Donation = require('../../models/donation');
const Order = require('../../models/order');

module.exports = {
  create,
  getAll,
}

async function create(req, res) {
  const price = req.body.subPrice;
  const charity = req.body.charityId;
  const order = await Order.create({user: req.user._id, isPaid: true})
  const donation = await Donation.create({name: order._id, price, charity, order: order._id});
  res.status(200).json(donation); 
}

async function getAll(req, res) {
  const donations = await Donation.find()
  res.status(200).json(donations)
}
