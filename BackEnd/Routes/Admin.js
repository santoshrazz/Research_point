const adminRoute = require("express").Router();
const adminModel = require("../model/Admin");
adminRoute.get("/", () => {
    console.log("Working");
})
adminRoute.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Not email or password" });
        }
        const result = await adminModel.findOne({ email });
        if (!result) {
            return res.status(200).json({ login: false, message: "Wrong Credentials" });
        }
        if (result.password === password) {
            return res.status(200).json({ login: true, message: "Success" });
        }
        return res.status(400).json({ login: false, message: "Invalid Password" });
    } catch (error) {
        console.log(error);
        res.json({ message: "Error from catch", error });
    }

})

module.exports = adminRoute;