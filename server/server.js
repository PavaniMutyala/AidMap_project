const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const { Volunteer, HelpRequest, CrisisLocation, Notification } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.send('AidMap Backend is Running 🚀');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI,{serverSelectionTimeoutMS: 30000})
  .then(() => console.log('MongoDB Atlas Connected'))
  .catch(err => console.error('MongoDB Connection error:', err));

// --- API ROUTES ---

// Volunteers
app.get('/api/volunteers', async (req, res) => {
  const data = await Volunteer.find();
  res.json(data);
});

app.post('/api/volunteers', async (req, res) => {
  const newVolunteer = new Volunteer(req.body);
  await newVolunteer.save();
  res.status(201).json(newVolunteer);
});

// Help Requests
app.get('/api/requests', async (req, res) => {
  const data = await HelpRequest.find();
  res.json(data);
});

app.post('/api/requests', async (req, res) => {
  const newRequest = new HelpRequest(req.body);
  await newRequest.save();
  res.status(201).json(newRequest);
});

// Crisis Locations
app.get('/api/locations', async (req, res) => {
  const data = await CrisisLocation.find();
  res.json(data);
});

// Notifications
app.get('/api/notifications', async (req, res) => {
  const data = await Notification.find().sort({ createdAt: -1 });
  res.json(data);
});

// SEED DATA ROUTE (For Hackathon Demo Setup)
app.post('/api/seed', async (req, res) => {
  try {
    await Volunteer.deleteMany({});
    await HelpRequest.deleteMany({});
    await CrisisLocation.deleteMany({});
    await Notification.deleteMany({});

    // The frontend demoData.js content will be sent here
    const { volunteers, helpRequests, crisisLocations, notifications } = req.body;
    
    await Volunteer.insertMany(volunteers);
    await HelpRequest.insertMany(helpRequests);
    await CrisisLocation.insertMany(crisisLocations);
    await Notification.insertMany(notifications);

    res.json({ message: 'Database seeded successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
