const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    companyName: {type: [String], required: true},
},
{collection : 'Customer'});
const Customer = mongoose.model("Customer", customerSchema);
console.log("Customer"+ Customer)
module.exports = Customer;