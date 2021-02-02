const Charity = require('../../models/charity');

module.exports = {
  index,
  show,
  create,
  update,
  deleteOne,
}

async function index(req, res) {
  const charities = await Charity.find({});
  res.status(200).json(charities);
}

async function show(req, res) {
  const charity = await Charity.findById(req.params.id);
  res.status(200).json(charity);
}

async function create(req, res) {
  const charity = await Charity.create(req.body);
  res.status(201).json(charity)
}

async function update(req, res) {
  const charity = await Charity.findByIdAndUpdate(req.params.id, req.body, {new: true,});
  res.status(200).json(charity)
}

async function deleteOne(req, res) {
  const deletedCharity = await Charity.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedCharity);
}