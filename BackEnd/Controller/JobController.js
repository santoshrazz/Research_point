const jobModel = require("../model/Jobs.models")

async function handlePostJob(req, res) {
    try {
        const { title, desc, startDate, lastDate, noOfPost, officialLink } = req.body;
        console.log(title, desc, startDate, lastDate, noOfPost, officialLink);
        if (!title || !desc || !startDate || !lastDate || !noOfPost || !officialLink) {
            return res.status(400).json({ message: "Can't get require data" });
        }
        const result = await jobModel.create({
            title, desc, startDate, lastDate, noOfPost, officialLink
        })
        console.log(result);
        res.status(200).json({ result })

    } catch (error) {
        console.log(error);
    }
}
module.exports = handlePostJob