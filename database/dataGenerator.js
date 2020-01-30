const faker = require('faker');
const fs = require('fs');
const path = require('path');

const genrePool = [
  'Rap/Hip Hop',
  ['Dance', 'EDM'],
  'Chill',
  'R&B & Soul',
  'Pop',
  ['Indie', 'Alternative'],
];

const max = 1000000;
const min = 1000;

function generateTags() {
  const tags = [];
  const genreIdx = Math.floor(Math.random() * genrePool.length);
  if (Array.isArray(genrePool[genreIdx])) {
    const numOfTags = Math.floor(Math.random() * genrePool[genreIdx].length);
    const temp = genrePool[genreIdx].slice();
    for (let j = 0; j <= numOfTags; j += 1) {
      const randIdx = Math.floor(Math.random() * temp.length);
      tags.push(temp.splice(randIdx, 1).join());
    }
  } else {
    tags.push(genrePool[genreIdx]);
  }
  return tags;
}

function randomBasedOnPlays(numOfPlays, ceiling) {
  return Math.round(numOfPlays * (Math.random() * ceiling));
}

function generateArtistName() {
  const possNames = [
    faker.internet.domainWord(),
    faker.random.words(),
    `${faker.name.firstName()} ${faker.name.lastName()}`,
  ];

  return possNames[Math.floor(Math.random() * possNames.length)];
}

function generateLocation() {
  const hasCity = Math.floor(Math.random() * 5);
  if (hasCity === 4) {
    const loc = faker.address.city;
    return loc;
  }
  return undefined;
}

function generateRelatedTracks() {
  const songs = [];
  let initial = Math.round(Math.random() * 100000);
  // generate 100 song objects
  for (let i = 0; i < 100; i += 1) {
    initial += 1;
    const songId = initial;
    const artist = generateArtistName();
    const location = generateLocation();
    const title = faker.random.words();
    const albumArt = `https://picsum.photos/50/50?random=${Math.floor(Math.random() * 400)}`;
    const plays = Math.round(Math.random() * (max - min + 1) + min);
    const likes = randomBasedOnPlays(plays, 0.15);
    const reposts = randomBasedOnPlays(plays, 0.1);
    const comments = randomBasedOnPlays(plays, 0.001);
    const tags = generateTags();

    songs.push({
      songId,
      artist,
      location,
      title,
      albumArt,
      plays,
      likes,
      reposts,
      comments,
      tags,
    });
  }
  return songs;
}

const trackList = generateRelatedTracks();
const filePath = path.join(__dirname, '/songs.json');

fs.writeFile(filePath, JSON.stringify(trackList), (err) => {
  if (err) {
    console.log('Error Saving File', err);
  } else {
    console.log('File Save Successful');
  }
});
