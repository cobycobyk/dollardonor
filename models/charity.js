const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charitySchema = new Schema({
  name: { type: String, required: true },
  street: { type: String, required: true },
  city: {type: String, required: true},
  state: {type: String, required: true},
  phone: { type: String },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Charity', charitySchema);