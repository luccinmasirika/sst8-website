const axios = require('axios');

exports.contact = (req, res) => {
  const name = 'contact'

  res.render('frontoffice/pages/contact', {name});
};
