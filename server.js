const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-ii');

const app = express();
app.use(bodyParser.json());
require('./controllers')(app);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
