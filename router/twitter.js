const express = require("express");
const router = express.Router();
const twitter = require("twitter");


const client = new twitter({
    consumer_key: 'Vy54QFRdSRsAvICaTEKOBUS4w',
    consumer_secret: 'upiH6KHbPAHh83Jnjy9RSPGvhoXasuq0gAYSdxK4H5wjKluoAK',
    access_token_key: '1175342840-GcV3WvW6TMhYZF4nhSKdeaciOBarWAWwEKZ96cm',
    access_token_secret: 'u8fiXjHnIa8Hziq3gzTvJfW4kMa6x6G2Tfev2GZ5xLqKU'
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