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
        res.status(200).json({ result })

    } catch (error) {
        console.log(error);
    }
}
async function getAllJobs(req, res) {
    try {
        const allJobs = await jobModel.find({});
        if (!allJobs) {
            return res.status(400).json({ message: "No Jobs Available" })
        }
        res.status(200).json({ allJobs })
    } catch (error) {
        console.log(error);
    }
}
async function deleteJob(req, res) {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: "No job with this id available" })

        }
        const result = await jobModel.findByIdAndRemove(id);
        res.status(200).json({ message: "Job Removed Successfully" })
    } catch (error) {
        console.log("Error at deleteJob function", error);
    }

}
module.exports = { handlePostJob, getAllJobs, deleteJob }