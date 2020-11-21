const express = require("express");
const router = express.Router()



router.use("/tweet/", require("./tweet"));
router.use("/hashtag/", require("./hashtag"));


router.get("/engage/:id", (req, res) => {
    return res.render("index");
});

router.get("", (req, res) => {
    return res.end("404 not found");
});


module.exports = router;