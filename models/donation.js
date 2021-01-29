const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, default: 1 },
  charity: { type: Schema.Types.ObjectId, ref: 'Charity'},
  order: { type: Schema.Types.ObjectId, ref: 'Order'},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Donation', donationSchema);