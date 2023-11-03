const adminRoute = require("express").Router();
// const { loginAdmin } = require("../Controller/loginAdmin")
const { loginAdmin } = require("../Controller/AdminController");
adminRoute.get("/", () => {
    console.log("Working");
})
adminRoute.post("/login", loginAdmin)

module.exports = adminRoute;