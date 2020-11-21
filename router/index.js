const express = require("express");
const router = express.Router()



router.use("/tweet/", require("./tweet"));
router.use("/hashtag/", require("./hashtag"));


router.get("/", (req, res) => {
    return res.render("index");
});


module.exports = router;