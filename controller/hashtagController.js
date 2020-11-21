const Hashtag = require("../model/hashtagSchema");


module.exports.createTag = async (req, res) => {
    console.log(req.body);

    const hashtag = await Hashtag.create({
        "tag": req.body.tag,
        "owner": req.body.owner,
        "definition": req.body.definition
    })

    if (hashtag) {
        return res.status(200).json({

            "success": "created",
            "message": "tag created successfully"
        });
    }

    return res.status(200).json({

        "error": "creation failed",
        "message": "tag not created"
    });

}


module.exports.getTag = async (req, res) => {


    const tag = await Hashtag.find({ 'tag': req.body.tag }).sort({ "vote": -1 });
    console.log(tag);
    if (!tag) {
        return res.status(200).json({
            "error": "tag not found"
        });
    }

    return res.status(200).json({
        "success": "tag found",
        "data": tag
    });
}




module.exports.upvote = async (req, res) => {

    const { _id } = req.body;

    const obj = await Hashtag.find({ "_id": _id });
    await Hashtag.findByIdAndUpdate(_id, { 'vote': parseInt(obj[0].vote) + 1 });

    return res.status(200).json({
        "message": "increase value by 1 vote"
    })



}

module.exports.downvote = async (req, res) => {

    const { _id } = req.body;

    const obj = await Hashtag.find({ "_id": _id });
    await Hashtag.findByIdAndUpdate(_id, { 'vote': parseInt(obj[0].vote) - 1 });

    return res.status(200).json({
        "message": "decreased value by 1 vote"
    })
}
