const express = require('express');
const router = express.Router();
const alertsController = require('../controllers/alertsController');

router.post('/', alertsController.setupAlerts);
router.get('/', alertsController.getAlerts);

module.exports = router;
