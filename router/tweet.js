const express = require("express");
const { createTweet, getTweet } = require("../controller/tweetController");
const router = express.Router();


router.post("/create", createTweet);

// router.get('/read/:limit', getTweetLimit);
router.get('/read/', getTweet);



module.exports = router;