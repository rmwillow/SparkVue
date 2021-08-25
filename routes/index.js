const router = require('express').Router();
const thoughtRoutes = require('./api/thought-routes');
const userRoutes = require('./api/user-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;