const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8010;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});