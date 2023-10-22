const adminModel = require("../model/Admin")
const jwt = require('jsonwebtoken')
// -----------------------> LoginAdmin Function to Login Admin <---------------------------
async function loginAdmin(req, res) {
    try {
        const { email, password } = req.body;
        // Checking if email or password is blank
        if (!email || !password) {
            return res.status(400).json({ message: "Not email or password" });
        }
        // Find admin from Db
        const result = await adminModel.findOne({ email });
        if (!result) {
            return res.status(200).json({ login: false, message: "Wrong Credentials" });
        }
        // Checking Admin Password
        if (result.password === password) {
            const payload = { email };
            const jwtToken = jwt.sign(payload, "myKeyisMyKey")
            res.cookie("uttam", jwtToken, { expire: 360000 + Date.now() })
            return res.status(200).json({ login: true, message: "Success", token: jwtToken });
        }
        return res.status(400).json({ login: false, message: "Invalid Password" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Error from catch", error });
    }
}
module.exports = { loginAdmin }