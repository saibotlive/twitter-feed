/* eslint-disable */
require('dotenv').config();
const nodemon = require('nodemon');
const express = require('express');
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

process
  .on('exit', code => {
    nodemon.emit('quit');
    process.exit(code);
  })
  .on('SIGINT', () => {
    nodemon.emit('quit');
    process.exit(0);
  });

process.on('SIGINT', () => {
  console.log('Exit server');
  process.exit();
});

const app = express();
const port = process.env.DEBUG_PORT || 30000;

app.get('/handle/:id', (req, res) => {
  const id = req.params.id;
  client.get('statuses/user_timeline', { screen_name: id, count: 10 }, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      res.status(200).send({ tweets: tweets });
    } else {
      res.status(500).send({ error: error });
    }
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
