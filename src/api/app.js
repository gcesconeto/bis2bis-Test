const express = require('express');

const error = require('../middlewares/error');

const universitiesRouter = require('../controllers/universitiesRouter');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/universities', universitiesRouter);

app.use(error);

module.exports = app;
