const customerRouter = require("express").Router();
const { saveCustomer, getCustomer, deleteCustomer, saveCustomerEmail, getCustomerEmail } = require("../Controller/Customer_Controller");
const verifyUser = require("../middlewares/middlewares");

customerRouter.post("/saveDetails", saveCustomer)
customerRouter.get("/getDetails", verifyUser, getCustomer)
customerRouter.get("/deleteCustomer:id", verifyUser, deleteCustomer)
customerRouter.post("/saveEmail", saveCustomerEmail);
customerRouter.get("/getEmail", getCustomerEmail);


module.exports = customerRouter;