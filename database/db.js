const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/songs', { useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => console.log('Successfully connected to databse!'));

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

  console.log('SONGID:', songId);
  const Song = mongoose.model('Song', songSchema);

  Song.find({ id: songId }, (err, results) => {
    if (err) {
      console.log('ERROR FINDING BY SONG ID');
      callback(err);
    } else {
      console.log('results');
      console.log(results.tags);
      Song.find({ tags: results.tags }, (error, res) => {
        if (error) {
          console.log('ERROR FINDING RELATED TRACKS');
          callback(error);
        } else {
          console.log(res);
          callback(null, res.slice(0, 3));
        }
      });
    }
  });
}

module.exports = {
  grabRelatedSongs,
};
