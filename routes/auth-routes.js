const router = require('express').Router();
const passport = require('passport');
const { User } = require('../model/users.js');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//login for users already created locally
router.post('/login', async (req, res) => {
    try {
      const correctEmail = await User.findOne({ where: { email: req.body.email } });
  
      if (!correctEmail) {
        res
          .status(400)
          .json({ message: 'Incorrect email' });
        return;
      }
  
      const correctPassword = await userData.findOne({where: { password: req.body.password }});
  
      if (!correctPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect password' });
        return;
      }
  
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        
        res.json({ user: userData, message: 'Logging in...' });
      });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

// auth logout, close out sess, sends user back to homepage
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
    res.send('/')
  }
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/create', (req,res) => {
    res.send(/*this is where the create route will go*/)
});
// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send('you reached the redirect URI');
});



passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: //key,
        clientSecret: //secret,
        callbackURL: '/auth/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        console.log('passport callback function fired:');
    })
);
module.exports = router;