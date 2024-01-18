const { handlePostJob, getAllJobs, deleteJob } = require("../Controller/JobController");
const verifyUser = require("../middlewares/middlewares");
const jobRoute = require("express").Router();

jobRoute.post('/postJob', verifyUser, handlePostJob);
jobRoute.get("/allJobs", getAllJobs);
jobRoute.get("/deleteJob:id", deleteJob);
module.exports = jobRoute;