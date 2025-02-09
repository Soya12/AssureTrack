const mongoose = require("mongoose");

const healthSchema = new mongoose.Schema({
    policyName: String,
    providerName : String,
    policyNumber: String,
    startDate: Date,
    expiryDate: Date,
    premiumPaymentDate: Date,
    emergencyContact: String,


    

 
    
});

module.exports = mongoose.model("Health", healthSchema);
