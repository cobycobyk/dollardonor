const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 1 },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Donation', donationSchema);