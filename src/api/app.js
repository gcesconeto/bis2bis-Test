const express = require('express');
const universitiesRouter = require('../controllers/universitiesRouter');

const app = express();

app.use(express.json());

app.use('/universities', universitiesRouter);

module.exports = app;
