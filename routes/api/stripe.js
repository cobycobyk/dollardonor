const express = require('express');
const router = express.Router();
const stripeCtrl = require('../../controllers/api/stripe');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/pay', ensureLoggedIn, stripeCtrl.paymentIntent);

module.exports = router;