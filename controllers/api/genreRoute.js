const client = Client({ apiKey: 'af9a0c5ceefa4cfcafe74afc50577e33' });
client.fetchPodcastGenres({
  top_level_only: 1,
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error)
});


module.exports = router;