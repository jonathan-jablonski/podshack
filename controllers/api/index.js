const router = require("express").Router();

const genreRoutes = require('./genreRoute');

router.use('/genres', genreRoutes);

module.exports = router;