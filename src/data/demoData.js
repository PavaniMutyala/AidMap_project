// ==========================================
// AidMap – Demo Data
// All local data for hackathon demo
// ==========================================

export const volunteers = [
  { id: 1, name: "Rahul Sharma", skill: "Medical", lat: 12.9716, lng: 77.5946, phone: "9876543210", status: "Active", tasksCompleted: 12, avatar: "RS" },
  { id: 2, name: "Priya Nair", skill: "Food Distribution", lat: 12.9350, lng: 77.6240, phone: "9876543211", status: "Active", tasksCompleted: 8, avatar: "PN" },
  { id: 3, name: "Amit Patel", skill: "Rescue", lat: 12.9980, lng: 77.5510, phone: "9876543212", status: "Active", tasksCompleted: 15, avatar: "AP" },
  { id: 4, name: "Sneha Reddy", skill: "Teaching", lat: 12.9250, lng: 77.5870, phone: "9876543213", status: "Active", tasksCompleted: 6, avatar: "SR" },
  { id: 5, name: "Vikram Singh", skill: "General Help", lat: 12.9550, lng: 77.6100, phone: "9876543214", status: "Active", tasksCompleted: 10, avatar: "VS" },
  { id: 6, name: "Ananya Das", skill: "Medical", lat: 12.9420, lng: 77.5680, phone: "9876543215", status: "On Task", tasksCompleted: 9, avatar: "AD" },
  { id: 7, name: "Rohan Gupta", skill: "Food Distribution", lat: 12.9680, lng: 77.6350, phone: "9876543216", status: "Active", tasksCompleted: 7, avatar: "RG" },
  { id: 8, name: "Kavya Menon", skill: "Rescue", lat: 12.9100, lng: 77.5950, phone: "9876543217", status: "Active", tasksCompleted: 11, avatar: "KM" },
  { id: 9, name: "Arjun Kumar", skill: "Medical", lat: 12.9850, lng: 77.5750, phone: "9876543218", status: "On Task", tasksCompleted: 14, avatar: "AK" },
  { id: 10, name: "Deepa Iyer", skill: "Teaching", lat: 12.9600, lng: 77.5500, phone: "9876543219", status: "Active", tasksCompleted: 5, avatar: "DI" },
  { id: 11, name: "Karthik Rao", skill: "General Help", lat: 12.9300, lng: 77.6150, phone: "9876543220", status: "Active", tasksCompleted: 3, avatar: "KR" },
  { id: 12, name: "Meera Joshi", skill: "Food Distribution", lat: 12.9750, lng: 77.5850, phone: "9876543221", status: "Active", tasksCompleted: 8, avatar: "MJ" },
  { id: 13, name: "Sanjay Verma", skill: "Rescue", lat: 12.9450, lng: 77.6050, phone: "9876543222", status: "On Task", tasksCompleted: 16, avatar: "SV" },
  { id: 14, name: "Lakshmi Bhat", skill: "Medical", lat: 12.9200, lng: 77.5700, phone: "9876543223", status: "Active", tasksCompleted: 10, avatar: "LB" },
  { id: 15, name: "Nikhil Prasad", skill: "Teaching", lat: 12.9900, lng: 77.6200, phone: "9876543224", status: "Active", tasksCompleted: 4, avatar: "NP" },
];

export const helpRequests = [
  { id: 1, type: "Medical", description: "Elderly person needs medical assistance", lat: 12.9750, lng: 77.5900, urgency: "High", status: "Open", requester: "Sunita Devi", time: "10 min ago" },
  { id: 2, type: "Food", description: "Family of 5 needs food supplies", lat: 12.9400, lng: 77.6100, urgency: "Medium", status: "Open", requester: "Raju Yadav", time: "25 min ago" },
  { id: 3, type: "Shelter", description: "Displaced family needs temporary shelter", lat: 12.9600, lng: 77.5700, urgency: "High", status: "Assigned", requester: "Meena Kumari", time: "1 hr ago" },
  { id: 4, type: "Education", description: "Children need tutoring support", lat: 12.9300, lng: 77.5950, urgency: "Low", status: "Open", requester: "Anand Mishra", time: "2 hrs ago" },
  { id: 5, type: "Emergency Support", description: "Flooding in area, rescue needed", lat: 12.9850, lng: 77.5600, urgency: "Critical", status: "In Progress", requester: "Local Authority", time: "30 min ago" },
  { id: 6, type: "Medical", description: "Child with high fever needs doctor", lat: 12.9500, lng: 77.6250, urgency: "High", status: "Open", requester: "Fatima Begum", time: "15 min ago" },
  { id: 7, type: "Food", description: "Community kitchen needs volunteers", lat: 12.9650, lng: 77.5800, urgency: "Medium", status: "Open", requester: "NGO Hope", time: "45 min ago" },
  { id: 8, type: "Shelter", description: "Senior citizens need relocation help", lat: 12.9200, lng: 77.6000, urgency: "High", status: "Open", requester: "Ward Office", time: "1.5 hrs ago" },
  { id: 9, type: "Emergency Support", description: "Road blocked, need clearance team", lat: 12.9900, lng: 77.5500, urgency: "Critical", status: "Open", requester: "Traffic Police", time: "20 min ago" },
  { id: 10, type: "Food", description: "Orphanage needs meal support", lat: 12.9150, lng: 77.6150, urgency: "Medium", status: "Assigned", requester: "Bal Ashram", time: "3 hrs ago" },
];

export const crisisLocations = [
  { id: 1, name: "Koramangala Flood Zone", lat: 12.9352, lng: 77.6245, severity: "Critical", type: "Flooding", affectedPeople: 250 },
  { id: 2, name: "Whitefield Medical Camp", lat: 12.9698, lng: 77.7500, severity: "High", type: "Medical Emergency", affectedPeople: 120 },
  { id: 3, name: "Jayanagar Food Crisis", lat: 12.9250, lng: 77.5838, severity: "Medium", type: "Food Shortage", affectedPeople: 80 },
  { id: 4, name: "Majestic Shelter Need", lat: 12.9767, lng: 77.5713, severity: "High", type: "Displacement", affectedPeople: 150 },
  { id: 5, name: "Electronic City Rescue", lat: 12.8456, lng: 77.6603, severity: "Critical", type: "Building Collapse", affectedPeople: 45 },
];

export const notifications = [
  { id: 1, type: "urgent", title: "Critical: Flood Rescue Needed", message: "Koramangala area flooding – 3 volunteers deployed", time: "5 min ago", read: false },
  { id: 2, type: "info", title: "New Volunteer Joined", message: "Rahul Sharma (Medical) has registered as a volunteer", time: "15 min ago", read: false },
  { id: 3, type: "success", title: "Help Request Completed", message: "Food distribution at Jayanagar completed successfully", time: "30 min ago", read: true },
  { id: 4, type: "warning", title: "Low Volunteer Coverage", message: "Whitefield area has only 2 volunteers for 5 requests", time: "1 hr ago", read: false },
  { id: 5, type: "info", title: "Weekly Report Ready", message: "View this week's volunteer impact report", time: "2 hrs ago", read: true },
  { id: 6, type: "urgent", title: "Medical Emergency", message: "Child needs immediate medical attention in HSR Layout", time: "8 min ago", read: false },
  { id: 7, type: "success", title: "Volunteer Task Completed", message: "Amit Patel completed a rescue operation in Electronic City", time: "45 min ago", read: true },
  { id: 8, type: "info", title: "Resource Update", message: "New medical supplies received at central warehouse", time: "3 hrs ago", read: true },
];

export const weeklyData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  volunteersDeployed: [8, 12, 10, 15, 11, 14, 9],
  helpCompleted: [5, 8, 7, 12, 9, 11, 6],
  newRequests: [6, 10, 8, 14, 7, 13, 8],
};

export const aiSuggestions = [
  {
    id: 1,
    volunteer: "Rahul Sharma",
    skill: "Medical",
    request: "Child with high fever needs doctor",
    distance: "1.2 km",
    matchScore: 95,
    requestType: "Medical",
  },
  {
    id: 2,
    volunteer: "Priya Nair",
    skill: "Food Distribution",
    request: "Community kitchen needs volunteers",
    distance: "0.8 km",
    matchScore: 92,
    requestType: "Food",
  },
  {
    id: 3,
    volunteer: "Amit Patel",
    skill: "Rescue",
    request: "Flooding in area, rescue needed",
    distance: "2.1 km",
    matchScore: 88,
    requestType: "Emergency Support",
  },
  {
    id: 4,
    volunteer: "Sneha Reddy",
    skill: "Teaching",
    request: "Children need tutoring support",
    distance: "1.5 km",
    matchScore: 90,
    requestType: "Education",
  },
  {
    id: 5,
    volunteer: "Lakshmi Bhat",
    skill: "Medical",
    request: "Elderly person needs medical assistance",
    distance: "3.0 km",
    matchScore: 85,
    requestType: "Medical",
  },
];

export const resourceTracking = [
  { id: 1, resource: "Medical Kits", distributed: 45, remaining: 30, location: "Central Hub" },
  { id: 2, resource: "Food Packets", distributed: 320, remaining: 180, location: "Jayanagar Center" },
  { id: 3, resource: "Blankets", distributed: 120, remaining: 80, location: "Majestic Shelter" },
  { id: 4, resource: "Water Bottles", distributed: 500, remaining: 250, location: "Multiple Locations" },
  { id: 5, resource: "First Aid Kits", distributed: 60, remaining: 40, location: "Mobile Units" },
];

export const chatbotResponses = {
  "how to request help": "To request help, go to the Community Dashboard and click the 'Request Help' button. Fill in your location and the type of help you need. Our AI system will match you with the closest available volunteer!",
  "how volunteers can join": "Volunteers can join by visiting the Registration page and selecting 'Volunteer' as their role. Choose your skills (Medical, Food Distribution, Rescue, Teaching, or General Help) and you'll be added to our volunteer network immediately!",
  "how ngos coordinate": "NGOs can use the NGO Dashboard to view all active help requests, track volunteer deployment, and monitor crisis areas through our heatmap. The Coordinator Dashboard allows assigning volunteers to specific locations.",
  "what is aidmap": "AidMap is a Smart Volunteer Allocation System that connects people who need help with nearby volunteers and NGOs using AI-based mapping and heatmaps. It improves community crisis response by intelligently matching skills with needs.",
  "emergency": "For emergencies, please use the Community Dashboard to submit an urgent help request. Mark it as 'Critical' priority. Our system will immediately alert nearby volunteers with matching skills. For life-threatening emergencies, always call 112 first.",
  "default": "I'm the AidMap assistant! I can help you with:\n• How to request help\n• How volunteers can join\n• How NGOs coordinate support\n• What is AidMap\n• Emergency assistance\n\nType any of these topics or ask me anything about AidMap!",
};

// Heatmap data points [lat, lng, intensity]
export const heatmapData = {
  crisisHeat: [
    [12.9352, 77.6245, 0.9],
    [12.9698, 77.7500, 0.8],
    [12.9250, 77.5838, 0.5],
    [12.9767, 77.5713, 0.7],
    [12.8456, 77.6603, 0.95],
    [12.9750, 77.5900, 0.6],
    [12.9400, 77.6100, 0.4],
    [12.9600, 77.5700, 0.7],
    [12.9850, 77.5600, 0.85],
    [12.9150, 77.6150, 0.3],
  ],
  volunteerHeat: [
    [12.9716, 77.5946, 0.8],
    [12.9350, 77.6240, 0.7],
    [12.9980, 77.5510, 0.6],
    [12.9250, 77.5870, 0.5],
    [12.9550, 77.6100, 0.7],
    [12.9420, 77.5680, 0.6],
    [12.9680, 77.6350, 0.5],
    [12.9100, 77.5950, 0.8],
    [12.9850, 77.5750, 0.4],
    [12.9600, 77.5500, 0.6],
    [12.9300, 77.6150, 0.3],
    [12.9750, 77.5850, 0.7],
    [12.9450, 77.6050, 0.5],
    [12.9200, 77.5700, 0.8],
    [12.9900, 77.6200, 0.4],
  ],
};

export const mapCenter = [12.9516, 77.5946]; // Bangalore center
