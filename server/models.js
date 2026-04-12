const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  skill: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  phone: { type: String },
  status: { type: String, default: 'Active' },
  tasksCompleted: { type: Number, default: 0 },
  avatar: { type: String }
}, { timestamps: true });

const HelpRequestSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  urgency: { type: String, required: true },
  status: { type: String, default: 'Open' },
  requester: { type: String, required: true },
  time: { type: String, default: () => new Date().toLocaleTimeString() }
}, { timestamps: true });

const CrisisLocationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  severity: { type: String, required: true },
  type: { type: String, required: true },
  affectedPeople: { type: Number }
}, { timestamps: true });

const NotificationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  time: { type: String, default: 'Just now' },
  read: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = {
  Volunteer: mongoose.model('Volunteer', VolunteerSchema),
  HelpRequest: mongoose.model('HelpRequest', HelpRequestSchema),
  CrisisLocation: mongoose.model('CrisisLocation', CrisisLocationSchema),
  Notification: mongoose.model('Notification', NotificationSchema)
};
