const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

//POST /api.users
router.post('/', usersCtrl.create);
router.post('/login', usersCtrl.login);
router.put('/:id', usersCtrl.update);

//just to TESTING purposes for testing a token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;