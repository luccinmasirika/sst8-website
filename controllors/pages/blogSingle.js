const axios = require('axios');
const { server } = require('../../config');

exports.blogSingleContent = (req, res) => {
  const path = './blogSingle';
  const api = server.api;
  res.render('frontoffice/pages/blog', { path, api });
};
