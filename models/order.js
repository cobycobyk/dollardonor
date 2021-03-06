const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  isPaid: { type: Boolean, default: false},
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// orderSchema.virtual('orderTotal').get(function () {
//   return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
// });

// orderSchema.virtual('totalQty').get(function () {
//   return this.lineItems.reduce((total, item) => total + item.qty, 0);
// });

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

module.exports = mongoose.model('Order', orderSchema);