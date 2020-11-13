const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controllers.js');
const port = 8010;

const db = require('../db/connection.js');

app.use(bodyParser.json());
app.get('/api/listings/:id/neighborhood_stats', controller.getAllStats);

app.get('/api/listings/:id/neighborhood_reviews', controller.getAllReviews);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});