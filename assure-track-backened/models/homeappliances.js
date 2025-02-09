const mongoose = require("mongoose");

const homeappliancesSchema = new mongoose.Schema({
    applianceName: String,
    branch : String,
    modelNumber: String,
    startDate: Date,
    expiryDate: Date,
    premiumPaymentDate: Date,
    emergencyContact: String,


    

 
    
});

module.exports = mongoose.model("Home appliances", homeappliancesSchema);