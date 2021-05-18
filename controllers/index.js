const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const authRoutes = require("../routes/auth-routes.js");
// const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use ('/auth', authRoutes);
// router.use('/api', apiRoutes);


module.exports = router;
=======
const router = require("express").Router();

const homeRoutes = require("./homeRoutes");
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
