const express = require('express');
const universitiesRouter = require('../controllers/universitiesRouter');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/universities', universitiesRouter);

module.exports = app;
