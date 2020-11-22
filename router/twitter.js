const express = require("express");
const router = express.Router();
const twitter = require("twitter");


const client = new twitter({
    consumer_key: 'itB8p8e4TVyjhO84O1c0kw5n3',
    consumer_secret: 'dXzrrPkLmw4bIJW8ZgXtQmc9xZfDYsasWV7kwW0C78IGXwuA16',
    access_token_key: '1190330868436389888-fTJG3kyv6tPkK4iCIKS6xBczTmikHm',
    access_token_secret: 'Vs8vlhzBwxpAOT4Y5rXkgbUIvfGnJcc1FdZpHy11g4CmQ'
})

const params = { screen_name: 'samcaspus' };


router.get("/gettweets/:q", (req, res) => {

    const { q } = req.params;
    try {
        client.get('search/tweets', { q: q }, function (error, tweets, response) {

            return res.json({ data: tweets.statuses })
        });
    } catch (exception) {

    }
})


module.exports = router;