const express = require("express");
const cookieParsar = require("cookie-parser")
require("./Connector/Connector");
const adminRoute = require("./Routes/Admin");
const cors = require("cors");
const jobRoute = require("./Routes/JobRoute");
const app = express();
app.use(express.json());
// app.use(cors())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true, // Allow sending cookies and other credentials
}));
app.use(cookieParsar());
app.use(express.urlencoded({ extended: true }))
app.use("/admin", adminRoute);
app.use("/job", jobRoute);
app.listen(8800, () => {
    console.log(`listining at PORT 8800`);
})