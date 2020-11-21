const express = require("express");
const router = express.Router()



router.use("/tweet/", require("./tweet"));


router.get("/", (req, res) => {
    return res.render("index");
});


module.exports = router;