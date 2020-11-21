const Tweet = require("../model/tweetSchema");


module.exports.createTweet = (req, res) => {
    console.log(req.params);
    console.log(req.body);

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



