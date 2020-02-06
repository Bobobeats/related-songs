const mongoose = require('mongoose');

mongoose.connect('mongodb://database/musicLibrary', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => console.log('Successfully connected to database!'));

const songSchema = new mongoose.Schema({
  songId: Number,
  artist: String,
  title: String,
  albumArt: String,
  avatarUrl: String,
  location: String,
  plays: Number,
  likes: Number,
  reposts: Number,
  comments: Number,
  tags: Array,
});

function grabRelatedSongs(songId, callback) {
  const Song = mongoose.model('Song', songSchema);
  console.log('LOCATING SONG ID:', songId);
  Song.find({ songId }, (err, results) => {
    if (err) {
      console.log('ERROR FINDING BY SONG ID');
      callback(err);
    } else {
      console.log(`SEARCH RESULTS FOR ${songId}: ${JSON.stringify(results)}`);
      if (results.length === 0) {
        callback(null, []);
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
    }
  });
}

module.exports = {
  grabRelatedSongs,
};
