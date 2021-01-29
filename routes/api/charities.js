const express = require('express');
const router = express.Router();
const charitiesCtrl = require('../../controllers/api/charities');
const ensureAdmin = require('../../config/ensureAdmin');

router.get('/', charitiesCtrl.index);
router.get('/:id', charitiesCtrl.show);

module.exports = router;