const axios = require('axios');
const { server } = require('../../config');

/**
 * API for seo - content url - in meta
 * name to specify if blog is active
 */

const name = 'blog';
const API = server.API;


//GET BLOG CONTENT
exports.blog = (req, res) => {
  const path = 'blogCard';
  res.render('frontoffice/pages/blog', { path, API, name });
};

//GET SINGLE POST  CONTENT
exports.singleBlog = (req, res) => {
  const path = 'singleBlog';
  res.render('frontoffice/pages/blog', { path, API, name });
};

//GET ALL CATEGORIES
exports.categoriesBlog = (req, res) => {
  const path = 'categoriesBlog';
  res.render('frontoffice/pages/blog', { path, API, name });
};


//GET BLOG BY CATEGORIES
exports.singleCategoriesBlog = (req, res) => {
  const path = 'singleCategoriesBlog';
  res.render('frontoffice/pages/blog', { path, API, name });
};
