const express = require("express");
const router = express.Router();
const Insurance = require("../models/Insurance");

// Save Insurance Data (for Health, Vehicle, or Home Appliances)
router.post("/save", async (req, res) => {
  try {
    const newRecord = new Insurance(req.body);
    await newRecord.save();
    res.status(201).json({ message: "Record saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving record", details: error.message });
  }
});

// Get Insurance Data by Category
router.get("/:category", async (req, res) => {
  try {
    const records = await Insurance.find({ category: req.params.category });
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: "Error fetching records" });
  }
});

module.exports = router;
