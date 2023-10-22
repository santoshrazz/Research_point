const express = require("express");
const cookieParsar = require("cookie-parser")
require("./Connector/Connector");
const adminRoute = require("./Routes/Admin");
const app = express();
app.use(express.json());
app.use(cookieParsar());
app.use(express.urlencoded({ extended: true }))
app.use("/admin", adminRoute);
app.listen(8800, () => {
    console.log(`listining at PORT 8800`);
})