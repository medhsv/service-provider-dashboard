// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.json');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/api/services', (req, res) => {
  res.json({ services: db.services });
});

app.get('/api/teams', (req, res) => {
  res.json({ teams: db.teams });
});

app.get('/api/requests', (req, res) => {
  res.json({ requests: db.requests });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
