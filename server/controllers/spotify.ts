import express from 'express';
import querystring from 'querystring';
import config from '../config';

// Initialize the router
const router = express.Router();

router.get('/auth', function (req, res) {
  const url =
    'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      client_id: config.client_id,
      response_type: 'code',
      redirect_uri: 'http://localhost:4200/',
    });

  res.send({ redirect: url });
});

router.get('/test', function (req, res) {
  res.send('spoofy');
});

/*
Spotify auth tutorial:
https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow
*/

export default router;
