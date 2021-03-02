const axios = require('axios');

exports.coursContent = (req, res) => {
  const path = 'cours';
  res.render('frontoffice/pages/cours', { path });
};
