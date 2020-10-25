import express from 'express';

// Initialize the router
const router = express.Router();

// Add the middleware endpoints to the router
router.get('/', function (req, res) {
  res.send('test api route');
});

export default router;
