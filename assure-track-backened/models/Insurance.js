const mongoose = require("mongoose");

const InsuranceSchema = new mongoose.Schema({
  category: { type: String, required: true }, // Health, Vehicle, Home Appliances
  policy_name: String, // Health form
  provider_name: String, // Health form
  policy_number: String, // Common for all
  start_date: Date, // Common for all
  expiry_date: Date, // Common for all
  premium_payment_date: Date, // Health form
  emergency_contact: String, // Health form
  vehicle_name: String, // Vehicle form
  vehicle_number: String, // Vehicle form
  renewal_due_date: Date, // Vehicle form
  appliance_name: String, // Home Appliances form
  brand: String, // Home Appliances form
  model_number: String, // Home Appliances form
  purchase_date: Date, // Home Appliances form
  service_centre_contact: String // Home Appliances form
});

module.exports = mongoose.model("Insurance", InsuranceSchema);
