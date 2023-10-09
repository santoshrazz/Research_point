const mongoose = require("mongoose");
const URL = `mongodb://127.0.0.1:27017/ResearchPoint`
const connect = mongoose.connect(URL).then(() => {
    console.log("Db connected");

}).catch(() => {
    console.log("Couldn't Connect to DB");
})