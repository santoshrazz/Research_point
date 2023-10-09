const express = require("express");
require("./Connector/Connector");
const adminRoute = require("./Routes/Admin");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use("/admin", adminRoute);
app.listen(8800, () => {
    console.log(`listining at PORT 8800`);
})