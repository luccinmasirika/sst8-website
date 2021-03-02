const express = require('express');
const router = express.Router();

const { dashboardContent } = require('../controllors/admin/dashboard');

router.get('/backoffice', dashboardContent);

module.exports = router;
