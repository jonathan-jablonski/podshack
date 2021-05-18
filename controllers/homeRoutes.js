const router = require('express').Router();

//const apiRoutes = require("./controllers");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
//router.use("/", apiRoutes);
router.get('/login', (req, res) => { 
  res.render('login');
});

router.get('/', (req, res) => { 
  res.render('homepage');
});


module.exports = router;
