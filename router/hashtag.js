const express = require("express");
const hashtagController = require("../controller/hashtagController");
const router = express.Router();


router.post("/create", hashtagController.createTag);

// router.get('/read/:limit', getTweetLimit);
router.post('/read', hashtagController.getTag);



module.exports = router;