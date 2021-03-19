const axios = require('axios');

exports.home = (req, res) => {
  const name = ''
  res.render('frontoffice/pages/index', {name});
};
