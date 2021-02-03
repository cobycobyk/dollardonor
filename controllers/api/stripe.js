const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports = {
  paymentIntent
}

async function paymentIntent(req, res) {
  const {amount} = req.body
  const customer = await stripe.customers.create();
  const paymentIntent = await stripe.paymentIntents.create({
    customer: customer.id,
    setup_future_usage: 'off_session',
    amount: amount * 100,
    currency: 'usd',
    metadata: {integration_check: 'accept_a_payment'},
  });
  const clientSecret = paymentIntent.client_secret;
  res.status(200).json(clientSecret);
}
