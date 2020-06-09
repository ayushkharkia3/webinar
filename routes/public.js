const express = require('express');

const router = express.Router();

const publicController = require('../controller/public');

router.get('/', publicController.getHomePage);
router.get('/:_id/click', publicController.getClick);
router.get('/:_id/share', publicController.getShare);
router.post('/:_id/register', publicController.postRegister);

module.exports = router;