import express from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import config from '../config';

// Initialize the router
const router = express.Router();

// Initialize the Spotify API
const scopes = ['user-read-private', 'user-read-email'];
const spotifyApi = new SpotifyWebApi({
  clientId: config.client_id,
  clientSecret: config.client_secret,
  redirectUri: 'http://localhost:4200/',
});

router.get('/auth', function (req, res) {
  const url = spotifyApi.createAuthorizeURL(scopes, 'enter state here');
  res.send({ redirect: url });
});

router.post('/token', async function (req, res) {
  try {
    const data = (await spotifyApi.authorizationCodeGrant(req.body.code)).body;
    console.log('The token expires in ' + data['expires_in']);
    console.log('The access token is ' + data['access_token']);
    console.log('The refresh token is ' + data['refresh_token']);

    // Set the access token on the API object to use it in later calls
    spotifyApi.setAccessToken(data['access_token']);
    spotifyApi.setRefreshToken(data['refresh_token']);

    res.send(data);
  } catch (err) {
    res.send({ error: err });
  }
});

router.get('/test', function (req, res) {
  res.send('spoofy');
});

/*
Spotify auth tutorial:
https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-code-flow
*/

export default router;
