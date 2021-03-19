const axios = require('axios');

exports.about = (req, res) => {
  const name = "about"
  const path  = "about"
  res.render('frontoffice/pages/about', {name, path});
};

exports.instructeurs = (req, res) => {
  const name = "about"
  const path  = "instructeurs"
  res.render('frontoffice/pages/about', {name, path});
};
