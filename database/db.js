const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/musicLibrary', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => console.log('Successfully connected to database!'));

function grabRelatedSongs(songId, callback) {
  const songSchema = new mongoose.Schema({
    artist: String,
    title: String,
    albumArt: String,
    plays: Number,
    likes: Number,
    reposts: Number,
    comments: Number,
    tags: Array,
  });

  const Song = mongoose.model('Song', songSchema);

  Song.find({ songId }, (err, results) => {
    if (err) {
      console.log('ERROR FINDING BY SONG ID');
      callback(err);
    } else {
      Song.find({ tags: results[0].tags }, (error, res) => {
        if (error) {
          console.log('ERROR FINDING RELATED TRACKS');
          callback(error);
        } else {
          callback(null, res.slice(0, 3));
        }
      });
    }
  });
}

module.exports = {
  grabRelatedSongs,
};
