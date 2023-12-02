const mongoose = require("mongoose");
const emailSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
    }
})

const emailModel = mongoose.model("email", emailSchema);
module.exports = emailModel;