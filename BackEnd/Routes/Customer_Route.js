const customerRouter = require("express").Router();
const { saveCustomer, getCustomer } = require("../Controller/Customer_Controller");

customerRouter.post("/saveDetails", saveCustomer)
customerRouter.get("/getDetails", getCustomer)

module.exports = customerRouter;