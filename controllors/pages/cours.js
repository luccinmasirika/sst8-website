const axios = require('axios');
const { server } = require('../../config');

const name = 'cours';
const API = server.api;

//GET COURS CONTENT
exports.cours = (req, res) => {
  const path = 'cours';
  res.render('frontoffice/pages/cours', { path, API, name });
};

//GET COURS BY SEARCH FROM STRING IN MEDIA QUERY
exports.searchCours = (req, res) => {
  const path = 'searchCours';
  const data = 'undefined'
  res.render('frontoffice/pages/cours', { path, API, name, data });
};

//GET SINGLE COURS CONTENT
exports.singleCours = (req, res) => {
  const path = 'singleCours';
  res.render('frontoffice/pages/cours', { path, API, name });
};

//GET ALL CATEGORIES
exports.categoriesCours = (req, res) => {
  const path = 'categoriesCours';
  res.render('frontoffice/pages/cours', { path, API, name });
};

//GET COURS BY CATEGORIES
exports.singleCategoriesCours= (req, res) => {
  const path = 'singleCategoriesCours';
  const data = 'undefined'
  res.render('frontoffice/pages/cours', { path, API, name, data });
};


//GET COURS BY LEVEL
exports.singleLevelCours= (req, res) => {
  const path = 'singleLevelCours';
  const data = 'undefined'
  res.render('frontoffice/pages/cours', { path, API, name, data });
};
