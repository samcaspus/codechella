const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({

    username: {
        type: String,
        required: true,
    },
    tweet: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true,
    })

const Tweet = mongoose.model("Tweet", tweetSchema);

console.log("Tweet schema established");

module.exports = Tweet;
