const express = require('express');
const router = express.Router();
const stripeCtrl = require('../../controllers/api/stripe');


router.post('/pay', stripeCtrl.paymentIntent);

module.exports = router;