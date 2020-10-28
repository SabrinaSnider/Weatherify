import express from 'express';
import querystring from 'querystring';
import axios from 'axios';
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

router.post('/token', async function (req, res) {
  const authorization = btoa(`${config.client_id}:${config.client_secret}`);
  // need to add header params
  const tokenData = await axios({
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authorization}`,
    },
    url: 'https://accounts.spotify.com/api/token',
    data: {
      grant_type: 'authorization_code',
      code: req.body.code,
      redirect_uri: 'http://localhost:4200/', // used for validation
    },
  });
  res.send(tokenData);
});

router.get('/test', function (req, res) {
  res.send('spoofy');
});

/*
Spotify auth tutorial:
https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow
*/

export default router;
