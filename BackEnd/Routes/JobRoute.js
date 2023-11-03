const handlePostJob = require("../Controller/JobController")
const jobRoute = require("express").Router();

jobRoute.get('/postJobb', () => {
    console.log("Working FIne");
});
jobRoute.post('/postJob', handlePostJob);

module.exports = jobRoute;