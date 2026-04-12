const mongoose = require('mongoose');
require('dotenv').config();
const { Volunteer, HelpRequest, CrisisLocation, Notification } = require('./models');

const volunteers = [
  { name: "Rahul Sharma", skill: "Medical", lat: 12.9716, lng: 77.5946, phone: "9876543210", status: "Active", tasksCompleted: 12, avatar: "RS" },
  { name: "Priya Nair", skill: "Food Distribution", lat: 12.9350, lng: 77.6240, phone: "9876543211", status: "Active", tasksCompleted: 8, avatar: "PN" },
  { name: "Amit Patel", skill: "Rescue", lat: 12.9980, lng: 77.5510, phone: "9876543212", status: "Active", tasksCompleted: 15, avatar: "AP" },
  { name: "Sneha Reddy", skill: "Teaching", lat: 12.9250, lng: 77.5870, phone: "9876543213", status: "Active", tasksCompleted: 6, avatar: "SR" },
  { name: "Vikram Singh", skill: "General Help", lat: 12.9550, lng: 77.6100, phone: "9876543214", status: "Active", tasksCompleted: 10, avatar: "VS" }
];

const helpRequests = [
  { type: "Medical", description: "Elderly person needs medical assistance", lat: 12.9750, lng: 77.5900, urgency: "High", status: "Open", requester: "Sunita Devi" },
  { type: "Food", description: "Family of 5 needs food supplies", lat: 12.9400, lng: 77.6100, urgency: "Medium", status: "Open", requester: "Raju Yadav" },
  { type: "Emergency Support", description: "Flooding in area, rescue needed", lat: 12.9850, lng: 77.5600, urgency: "Critical", status: "Open", requester: "Local Authority" }
];

const crisisLocations = [
  { name: "Koramangala Flood Zone", lat: 12.9352, lng: 77.6245, severity: "Critical", type: "Flooding", affectedPeople: 250 },
  { name: "Whitefield Medical Camp", lat: 12.9698, lng: 77.7500, severity: "High", type: "Medical Emergency", affectedPeople: 120 }
];

const notifications = [
  { type: "urgent", title: "Critical: Flood Rescue Needed", message: "Koramangala area flooding – 3 volunteers deployed", read: false },
  { type: "info", title: "New Volunteer Joined", message: "Rahul Sharma (Medical) has registered as a volunteer", read: false }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Seed: Connected to MongoDB');

    await Volunteer.deleteMany({});
    await HelpRequest.deleteMany({});
    await CrisisLocation.deleteMany({});
    await Notification.deleteMany({});

    await Volunteer.insertMany(volunteers);
    await HelpRequest.insertMany(helpRequests);
    await CrisisLocation.insertMany(crisisLocations);
    await Notification.insertMany(notifications);

    console.log('Database Seeded Successfully!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
