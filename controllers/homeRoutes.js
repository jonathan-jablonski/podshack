const router = require('express').Router();
const { Client } = require('podcast-api');
// const withAuth = require('../utils/auth')

const client = Client({
  apiKey: process.env.API_KEY || null
});

router.get('/', (req, res) => {
  res.render('login');
});

router.get('/search', (req, res) => {
  res.render('search',
    // { 
    //   logged_in: req.session.logged_in
    //  }
  );
});

router.get('/results', (req, res) => {
  try {
    client.search({
      q: 'star wars',
      type: 'episode',
      offset: 0,
      only_in: 'title,description,author',
      language: 'English',
      safe_mode: 0,
    })
      .then((response) => {
        const podcasts = response.data.results.map(podcast => {
          return {
            title: podcast.title,
            episodes: podcast.total_episodes,
            description: podcast.description_original
          };
        });
        res.render('results', {
          podcasts,
          // loggedIn: req.session.loggedIn
        });
      });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
