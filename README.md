# Related-Songs
  [![Bobobeats](https://circleci.com/gh/Bobobeats/related-songs.svg?style=svg)](https://circleci.com/gh/Bobobeats/related-songs)
This service provides the user the opportunity to discover similar music based on a song's hashtags.

# Screenshots
  ![Screen Shot 2020-01-31 at 5 46 47 PM](https://user-images.githubusercontent.com/57578761/73585141-0d0ab000-4453-11ea-936f-7cb9af5a31e5.png)

# Tech/framework used
  -React\
  -Nodejs/Express\
  -AWS
  -Docker
  -Mongodb\
  -Enzyme/Jest

# Features
  -Shows 3 related tracks based on tags of current song.\
  -Allows user to hover over the artist name and preview their profile\
  -Hovering over each track will bring up interactive buttons\

# Notes
  -After image/containers have been created and spun up, run this command in the root directory:\
    "docker exec -ti related-songs_related_1 /bin/sh -c "npm run seed"
  -This was a project I worked on while at Hack Reactor. I was on a team with 2 other engineers, and we were tasked with implementing a clone of a popular service; in our case we chose Soundcloud.
