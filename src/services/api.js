const API_BASE_URL = 'http://localhost:5000/api';

export const fetchVolunteers = async () => {
  const res = await fetch(`${API_BASE_URL}/volunteers`);
  return res.json();
};

export const fetchHelpRequests = async () => {
  const res = await fetch(`${API_BASE_URL}/requests`);
  return res.json();
};

export const fetchCrisisLocations = async () => {
  const res = await fetch(`${API_BASE_URL}/locations`);
  return res.json();
};

export const fetchNotifications = async () => {
  const res = await fetch(`${API_BASE_URL}/notifications`);
  return res.json();
};

export const createVolunteer = async (data) => {
  const res = await fetch(`${API_BASE_URL}/volunteers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const createHelpRequest = async (data) => {
  const res = await fetch(`${API_BASE_URL}/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};
