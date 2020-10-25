import express from 'express';
import spotifyRouter from './spotify';

// Initialize the router
const router = express.Router();

// Add the middleware endpoints to the router
router.get('/', function (req, res) {
  res.send('test api route');
});

router.use('/spotify', spotifyRouter)

export default router;
