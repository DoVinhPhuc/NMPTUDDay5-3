const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/v1/roles', require('./routes/roles'));
app.use('/api/v1/users', require('./routes/users'));

module.exports = app;