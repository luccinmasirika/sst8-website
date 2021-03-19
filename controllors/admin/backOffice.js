const axios = require('axios');

const { server } = require('../../config');

const API = server.api;

// INSTRUCTORS SIGNUP
exports.signup = (req, res) => {
  res.render('backoffice/pages/signup');
};

// INSTRUCTORS SIGNIN
exports.signin = (req, res) => {
  const path = 'signin'
  res.render('backoffice/pages/signin');
};

// INSTRUCTORS RESTORE PWD
exports.signin = (req, res) => {
  const path = 'restorePwd';
  res.render('backoffice/pages/signin');
};

// INSTRUCTOR DASHBOARD DATA
exports.instructorBackOffice= (req, res) => {
  const path = 'dashboard'
  const name= 'Dashboard'
  res.render('backoffice/pages/backOffice', {path, name});
};

// COURSES MANAGEMENT
exports.coursMgt= (req, res) => {
  const path = 'coursMgt'
  const name= 'Cours'
  res.render('backoffice/pages/backOffice', {path, name});
};

// PROFILE MANAGEMENT
exports.profile= (req, res) => {
  const name= 'Profile'
  res.render('backoffice/pages/profile', {name});
};

// CREATE COURS MANAGEMENT
exports.create= (req, res) => {
  const path = 'createCours'
  const name= 'Create'
  res.render('backoffice/pages/backOffice', {path, name});
};

// WEBSITE SETTING
exports.setting= (req, res) => {
  const name= 'Setting'
  res.render('backoffice/pages/setting', {name});
};


