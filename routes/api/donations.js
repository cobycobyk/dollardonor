const express = require('express');
const router = express.Router();
const donationsCtrl = require('../../controllers/api/donations');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', ensureLoggedIn, donationsCtrl.create);
router.get('/', donationsCtrl.getAll);

module.exports = router;