const express = require('express');
const router = express.Router();

const { home } = require('../controllors/pages/home');
const { about, instructeurs } = require('../controllors/pages/about');
const { contact } = require('../controllors/pages/contact');
const {
  cours,
  searchCours,
  singleCours,
  categoriesCours,
  singleCategoriesCours,
  singleLevelCours
} = require('../controllors/pages/cours');

const {
  blog,
  singleBlog,
  categoriesBlog,
  singleCategoriesBlog,
} = require('../controllors/pages/blog');

//HOME ROUTES
router.get('/', home);

//ABOUT ROUTES
router.get('/about', about);
router.get('/instructeurs', instructeurs);

//COURS ROUTES
router.get('/cours', cours);
router.get('/cours/:slug', singleCours);
router.get('/search', searchCours);
router.get('/categories/cours', categoriesCours);
router.get('/categories/cours/:slug', singleCategoriesCours);
router.get('/niveau/cours/:slug', singleLevelCours);

//BLOG ROUTES
router.get('/blog', blog);
router.get('/blog/:slug', singleBlog);
router.get('/categories/blog', categoriesBlog);
router.get('/categories/blog/:slug', singleCategoriesBlog);

//CONTACT ROUTES
router.get('/contact', contact);

module.exports = router;
