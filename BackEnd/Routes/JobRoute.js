const handlePostJob = require("../Controller/JobController");
const verifyUser = require("../middlewares/middlewares");
const jobRoute = require("express").Router();

jobRoute.post('/postJob', verifyUser, handlePostJob);

module.exports = jobRoute;