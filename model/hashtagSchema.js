const mongoose = require("mongoose");

const hashtagSchema = mongoose.Schema({

    tag: {
        type: String,
        required: true,
    },
    owner:
    {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
        type: String,
        required: true  
    },
    definition: {
        type: String,
        default: false
    },
    socialCause:
    {
        type: Boolean,
        default: false
    },
    vote: {
        type: Number,
        default: 0,
    }
},
    {
        timestamps: true
    })

const Hashtag = mongoose.model("Hashtag", hashtagSchema);

console.log("Hashtag schema established");

module.exports = Hashtag;
