const Charity = require('../../models/charity');

module.exports = {
  index,
  show,
}

async function index(req, res) {
  const charities = await Charity.find({});
  res.status(200).json(charities);
}

async function show(req, res) {
  const charity = await Charity.findById(req.params.id);
  res.status(200).json(charity);
}