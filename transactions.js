const express = require('express');
const router = express.Router();
const transactionsController = require('../controllers/transactionsController');

router.post('/', transactionsController.saveTransactionDetails);

module.exports = router;
