const express = require("express");
const { createTweet, getTweet, deleteAll } = require("../controller/tweetController");
const router = express.Router();


router.post("/create", createTweet);

// router.get('/read/:limit', getTweetLimit);
router.get('/read/', getTweet);
router.get("/delete-all", deleteAll);


module.exports = router;