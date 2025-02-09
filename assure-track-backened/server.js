const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { configDotenv } = require("dotenv");
const path = require("path");
const Insurance = require("./models/Insurance");
// const Health = require("./models/health");

configDotenv();

const app = express();
app.use(express.json());


// ✅ Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ✅ Set Static Files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

// ✅ Set View Engine
app.set("view engine", "ejs");

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Define Schemas
const healthSchema = new mongoose.Schema({
    policy_name: String,
    provider_name: String,
    policy_no: String,
    start_date: Date,
    expiry_date: Date,
    premium_payment_date: Date,
    emergency_contact: String
});

const applianceSchema = new mongoose.Schema({
    appliance_name: String,
    branch_name: String,
    model_no: String,
    purchase_date: Date,
    expiry_date: Date,
    service_centre_contact: String
});

const vehicleSchema = new mongoose.Schema({
    vehicle_name: String,
    vehicle_number: String,
    insurance_provider: String,
    policy_number: String,
    start_date: Date,
    expiry_date: Date,
    renewal_due_date: Date
});

// ✅ Create Models
const Health = mongoose.model("Health", healthSchema);
const HomeAppliance = mongoose.model("HomeAppliance", applianceSchema);
const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// ✅ API Route to Render Health Page
app.get("/health", (req, res) => {
    res.render("health"); // Removed `.ejs`, Express automatically finds it
});

app.get("/homeappliances", (req, res) => {
    res.render("homeappliances"); // Removed `.ejs`, Express automatically finds it
});

// app.post("/health", async (req, res) => {
//     const data = req.body;
//     const newHealth = new Health({
//         policyName: data.policyName,
//         providerName: data.providerName,
//         policyNumber: data.policyNumber,
//         startDate: data.startDate,
//         expirydate: data.expirydate,
//         premiumPaymentDate: data.premiumPaymentDate,
//         emergencyContact: data.emergencyContact
//     })

//     await newHealth.save();
//     res.json({ message: "Health Insurance Data Saved Successfully" });

// });

app.post("/health", async (req, res) => {
    const data = req.body;
    const newHealth = new Health({
        policyName: data.policyName,
        providerName: data.providerName,
        policyNumber: data.policyNumber,
        startDate: data.startDate,
        expirydate: data.expirydate,
        premiumPaymentDate: data.premiumPaymentDate,
        emergencyContact: data.emergencyContact
    })

    await newHealth.save();
    res.json({ message: "Health Insurance Data Saved Successfully" });

});

app.get("/index", (req, res) => {
    res.render("index"); // Removed `.ejs`, Express automatically finds it
});
app.get("/login", (req, res) => {
    res.render("login"); // Removed `.ejs`, Express automatically finds it
});
app.get("/options", (req, res) => {
    res.render("options"); // Removed `.ejs`, Express automatically finds it
});
app.get("vehicle", (req, res) => {
    res.render("vehicle"); // Removed `.ejs`, Express automatically finds it
});



// ✅ API Route to Fetch Health Records
app.get("/api/health", async (req, res) => {
    try {
        const records = await Health.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: "Error fetching health records" });
    }
});

// ✅ API Route to Fetch Home Appliance Records
app.get("/api/home-appliances", async (req, res) => {
    try {
        const records = await HomeAppliance.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: "Error fetching home appliance records" });
    }
});

// ✅ API Route to Fetch Vehicle Records
app.get("/api/vehicles", async (req, res) => {
    try {
        const records = await Vehicle.find();
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: "Error fetching vehicle records" });
    }
});

// ✅ Start the Server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
