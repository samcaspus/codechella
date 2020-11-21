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


    const tag = await Hashtag.findOne({ 'tag': req.body.tag });
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



