const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '/../client/dist')));

// GET Request
// will invoke helper method to take in genre/hashtag and return 3 related tracks

app.listen(PORT, () => {
  console.log('App is listening on Port 3000...');
});
