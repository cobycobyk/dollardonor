const express = require('express');
const router = express.Router();
const productsCtrl = require('../../controllers/api/products');

router.get('/', productsCtrl.getAll)

module.exports = router;