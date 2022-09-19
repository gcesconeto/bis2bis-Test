const express = require('express');
const path = require('path');

const { error } = require('../middlewares');

const universitiesRouter = require('../controllers/universitiesRouter');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => res.status(200).sendFile(path.join(__dirname, '../help.html')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/universities', universitiesRouter);

app.use(error);

module.exports = app;
