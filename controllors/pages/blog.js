const axios = require('axios');
const { server } = require('../../config');

exports.blogContent = (req, res) => {
  const path = './blogCard';
  const api = server.api;
  res.render('frontoffice/pages/blog', { path, api });
};
