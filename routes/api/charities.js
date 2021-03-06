const express = require('express');
const router = express.Router();
const charitiesCtrl = require('../../controllers/api/charities');
const ensureAdmin = require('../../config/ensureAdmin');

router.get('/', charitiesCtrl.index);
router.get('/:id', charitiesCtrl.show);
router.post('/', ensureAdmin, charitiesCtrl.create);
router.put('/:id', ensureAdmin, charitiesCtrl.update);
router.delete('/:id', ensureAdmin, charitiesCtrl.deleteOne);

module.exports = router;