const Tweet = require("../model/tweetSchema");
const twitter = require("twitter");


const client = new twitter({
    consumer_key: 'Vy54QFRdSRsAvICaTEKOBUS4w',
    consumer_secret: 'upiH6KHbPAHh83Jnjy9RSPGvhoXasuq0gAYSdxK4H5wjKluoAK',
    access_token_key: '1175342840-GcV3WvW6TMhYZF4nhSKdeaciOBarWAWwEKZ96cm',
    access_token_secret: 'u8fiXjHnIa8Hziq3gzTvJfW4kMa6x6G2Tfev2GZ5xLqKU'
})


module.exports.createTweet = (req, res) => {
    console.log(req.params);
    console.log(req.body);

    // commenting this body down as we dont want people messing around with out tweets while testing :p  
    // client.post('statuses/update', {status: req.body.tweet }, function(error, tweet, response) {
    //     if (!error) {
    //       console.log(tweet);
    //     }
    //   });

    const tweet = Tweet.create({
        "username": req.body.username,
        "tweet": req.body.tweet
    })

    if (tweet) {
        return res.status(200).json({

            "success": "created",
            "message": "tweet has been created successfully"
        })
    }

    return res.status(200).json({

        "error": "creation failed",
        "message": "twitter could not be created"
    })

}


module.exports.getTweet = async (req, res) => {


    const tweets = await Tweet.find({}).sort("-_id");

    return res.status(200).json({
        "success": "all tweets created till date",
        "data": tweets
    })
}

module.exports.deleteAll = (req, res) => {


    Tweet.collection.drop();

    return res.status(200).json({
        "success": "all tweets deleted",
    });
}


