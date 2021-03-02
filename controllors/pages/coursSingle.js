const axios = require('axios');

exports.coursSingleContent = (req, res) => {
  const path = 'coursSingle';
  res.render('frontoffice/pages/cours', { path });
};
