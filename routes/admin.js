const express = require('express');
const router = express.Router();

const {
  instructorBackOffice,
  coursMgt,
  profile,
  create,
  setting,
} = require('../controllors/admin/backOffice');

router.get('/backoffice', instructorBackOffice);
router.get('/backoffice/cours', coursMgt);
router.get('/backoffice/profile', profile);
router.get('/backoffice/create', create);
router.get('/backoffice/setting', setting);

module.exports = router;
