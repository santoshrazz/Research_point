const customerModel = require("../model/Customer.models")
const emailModel = require("../model/Email.models")

// Function to save customer Details ------------>  No Login Required   <-------------------
async function saveCustomer(req, res, next) {
    try {
        const { fullName, email, Mob_Number, message } = req.body;
        if (!fullName || !email || !Mob_Number || !message) {
            return res.status(400).json({ message: "Can't get require data to save customer", success: false });
        }
        const result = await customerModel.create({
            fullName, email, Mob_Number, message
        })
        if (!result) {
            return res.status(400).json({ message: "Problem in saving into Db", success: false });
        }
        res.status(201).json({
            message: "User saved successfully",
            success: true
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

// Function to Get customer Details ------------>   Login Required   <-------------------
async function getCustomer(req, res, next) {
    try {
        const result = await customerModel.find({});
        if (!result) {
            return res.status(400).json({ message: "Can't find data in DB", success: false });
        }
        res.status(200).json({
            User: result,
            success: true
        })
    } catch (error) {

    }
}

// Function to Delete customer Details ------------>  Login Required   <-------------------

async function deleteCustomer(req, res, next) {
    try {
        const _id = req.params.id;
        const result = await customerModel.deleteOne({ _id });
        if (!result) {
            return res.status(400).json({ message: "Can't Delete data in DB", success: false });
        }
        res.status(200).json({
            User: result,
            success: true
        })
    } catch (error) {

    }
}

// Function to save customer Email ------------>  No Login Required   <-------------------
async function saveCustomerEmail(req, res, next) {
    try {
        const email = req.body.email;
        if (!email) {
            return res.status(404).json({ success: false, message: "Email Required" });
        }
        const findEmail = await emailModel.find({ email });
        if (findEmail.length > 0) {
            return res.status(200).json({ success: true, message: "Email Already Exists" });
        }
        const result = await emailModel.create({ email });
        res.status(200).json({ success: true, message: "Email Saved", result });

    } catch (error) {
        res.status(404).json({ error })
    }
}

// Function to get customer Email ------------>  Login Required   <-------------------
async function getCustomerEmail(req, res, next) {
    try {
        const result = await emailModel.find({});
        res.status(200).json({ result });
    } catch (error) {
        res.status(404).json({ error })
        console.log(error);
    }
}
module.exports = { saveCustomer, getCustomer, deleteCustomer, saveCustomerEmail, getCustomerEmail }