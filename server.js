const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

//ALWAYS require and configure near the top
require('dotenv').config();
//connect to the database ALWAYS after require .env
require('./config/database')

const app = express();

app.use(logger('dev'));
app.use(express.json());
// configure both serve-favicon and static middleware 
//to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//middleware to verify a token and assign the user object from the jwt
//to a req.user property
app.use(require('./config/checkToken'));

// put API routes here, before the 'catch all' route
app.use('/api/users', require('./routes/api/users'));
//Protect the api routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
const ensureAdmin = require('./config/ensureAdmin');
app.use('/api/charities', require('./routes/api/charities'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

//the following 'catch all' route (note the *) is necessary
//to return the index.html on all non-ajax requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});