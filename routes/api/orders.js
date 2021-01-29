const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


router.get('/', ordersCtrl.getOrders);

module.exports = router;