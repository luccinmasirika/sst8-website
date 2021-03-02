const express = require('express');
const router = express.Router();

const { homeContent } = require('../controllors/pages/home');
const { aboutContent } = require('../controllors/pages/about');
const { coursContent } = require('../controllors/pages/cours');
const { contactContent } = require('../controllors/pages/contact');
const { blogContent } = require('../controllors/pages/blog');
const { blogSingleContent } = require('../controllors/pages/blogSingle');
const { coursSingleContent } = require('../controllors/pages/coursSingle');

router.get('/', homeContent);
router.get('/about', aboutContent);
router.get('/cours', coursContent);
router.get('/cours/:slug', coursSingleContent);
router.get('/blog', blogContent);
router.get('/blog/:slug', blogSingleContent);
router.get('/contact', contactContent);

module.exports = router;
