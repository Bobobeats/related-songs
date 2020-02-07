const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const db = require('../database/db');

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('api/songs/:songId', (req, res) => {
  // would return { songId: "<Number>"}
  const songId = Number(req.params.songId);
  // call db method here
  db.grabRelatedSongs(songId, (err, results) => {
    if (err) {
      console.log('ERROR RETRIEVING RELATED TRACKS');
      res.send(err);
    } else {
      if (results.length === 0) {
        console.log('NO RELATED TRACKS FOUND :(');
      } else {
        console.log('SUCCESSFULLY RETRIEVED RELATED TRACKS');
      }
      res.send(results);
    }
  });
});

app.get('/api/relatedtracks_bundle', (req, res) => {
  fs.readFile(path.join(__dirname, '/../client/dist/relatedTracks_bundle.js'), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log('App is listening on Port 3000...');
});
