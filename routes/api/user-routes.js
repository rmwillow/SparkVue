const router = require('express').Router();

router.use('/thoughts', thoughtRoutes);

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);

module.exports = router;