const jwt = require("jsonwebtoken");

const verifyUser = async (req, res, next) => {
    try {
        const cookie = req.cookies;
        console.log("Cookie is ", cookie);
        if (!cookie) {
            return res.status(400).json({ message: "Cookie Not Found" });
        }
        console.log("Cookie is ", cookie);
        const finalCookie = cookie['uttam'];
        console.log("FinalCookie is ", finalCookie);
        jwt.verify(finalCookie, 'myKeyisMyKey', (err, data) => {
            if (err) {
                console.log("Verified");
                return res.status(400).json({ message: "User Not Verified" });
            }
            req.id = data.id;
            next();
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = verifyUser;
