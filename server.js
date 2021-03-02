const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const debug = require('debug')('http');
const session = require('express-session');
const { server } = require('./config/index');

// IMPORT ALL ROUTES
const indexRoutes = require('./routes/pages');
const adminRoutes = require('./routes/admin');

// START APPLICATION
const app = express();

// STATICS FILES
app.use('/assets', express.static(path.join(__dirname, 'public')));

// SET VIEWS ENGINE
app.set('vews', './views');
app.set('view engine', 'ejs');

// ROUTES MIDDLEWARES
app.use(indexRoutes);
app.use(adminRoutes);

app.listen(server.port, (err, fallback) => {
  if (err) return console.log('Error with server');
  debug(
    `Server listen on port ${server.port} and run on ${server.host}:${server.port}`
  );
});
