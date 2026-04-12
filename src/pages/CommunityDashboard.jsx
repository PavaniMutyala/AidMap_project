import { useState } from 'react';
import { FiHeart, FiMapPin, FiUsers, FiAlertCircle, FiX } from 'react-icons/fi';
import DashboardTabs from '../components/DashboardTabs';
import StatsCard from '../components/StatsCard';
import NotificationPanel from '../components/NotificationPanel';
import MapView from '../components/MapView';
import Chatbot from '../components/Chatbot';

export default function CommunityDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [requestForm, setRequestForm] = useState({ type: '', description: '', urgency: 'Medium' });
  const [requestSent, setRequestSent] = useState(false);

  const handleRequest = (e) => {
    e.preventDefault();
    setRequestSent(true);
    setTimeout(() => { setShowModal(false); setRequestSent(false); setRequestForm({ type: '', description: '', urgency: 'Medium' }); }, 2000);
  };

  return (
    <div className="dashboard" id="community-dashboard">
      <DashboardTabs />
      <div className="dashboard-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div>
            <h1>🏘️ Community Dashboard</h1>
            <p>Request help and track nearby volunteers and support</p>
          </div>
          <button className="btn btn-accent" onClick={() => setShowModal(true)} id="request-help-btn">
            <FiAlertCircle /> Request Help
          </button>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Stats */}
        <div className="stats-row">
          <StatsCard icon={<FiUsers />} value="8" label="Nearby Volunteers" trend="3 within 2km" trendDir="up" color="green" />
          <StatsCard icon={<FiHeart />} value="3" label="Your Active Requests" color="orange" />
          <StatsCard icon={<FiMapPin />} value="2" label="Volunteers En Route" trend="ETA: 15 min" trendDir="up" color="blue" />
          <StatsCard icon={<FiAlertCircle />} value="1" label="Urgent Alerts" color="red" />
        </div>

        {/* Map + Notifications */}
        <div className="dashboard-grid">
          <div className="panel">
            <div className="panel-header">
              <h3><FiMapPin /> Nearby Volunteers</h3>
            </div>
            <div className="panel-body no-pad">
              <MapView height="400px" showVolunteers={true} showRequests={false} showHeatmap={true} heatType="volunteer" />
            </div>
          </div>
          <NotificationPanel />
        </div>

        {/* Active requests */}
        <div className="panel">
          <div className="panel-header">
            <h3><FiHeart /> Your Help Requests</h3>
          </div>
          <div className="panel-body">
            <div className="task-list">
              {[
                { type: 'Medical', desc: 'Need basic medical checkup', status: 'Volunteer Assigned', urgency: 'Medium', volunteer: 'Rahul Sharma' },
                { type: 'Food', desc: 'Need food supplies for family', status: 'In Progress', urgency: 'Low', volunteer: 'Priya Nair' },
                { type: 'Emergency Support', desc: 'Flooding in basement', status: 'Open', urgency: 'High', volunteer: 'Searching...' },
              ].map((req, i) => (
                <div key={i} className="task-card">
                  <div className="task-card-header">
                    <h4>{req.type} – {req.desc}</h4>
                    <span className={`task-badge ${req.urgency.toLowerCase()}`}>{req.urgency}</span>
                  </div>
                  <div className="task-meta">
                    <span>📌 {req.status}</span>
                    <span>🤝 {req.volunteer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Request Help Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            {requestSent ? (
              <div style={{ textAlign: 'center', padding: 20 }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>✅</div>
                <h3>Help Request Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>
                  Our AI is matching you with the nearest volunteer...
                </p>
              </div>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <h3 style={{ margin: 0 }}>Request Help</h3>
                  <button onClick={() => setShowModal(false)} style={{ background: 'none', color: 'var(--text-secondary)', fontSize: '1.2rem', cursor: 'pointer', border: 'none' }}><FiX /></button>
                </div>
                <form onSubmit={handleRequest}>
                  <div className="form-group">
                    <label>Type of Help</label>
                    <select className="form-input" value={requestForm.type} onChange={e => setRequestForm(p => ({ ...p, type: e.target.value }))} required>
                      <option value="">Select type...</option>
                      <option>Food</option>
                      <option>Medical</option>
                      <option>Shelter</option>
                      <option>Education</option>
                      <option>Emergency Support</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-input" rows="3" placeholder="Describe what help you need..." value={requestForm.description} onChange={e => setRequestForm(p => ({ ...p, description: e.target.value }))} required />
                  </div>
                  <div className="form-group">
                    <label>Urgency Level</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {['Low', 'Medium', 'High', 'Critical'].map(u => (
                        <button key={u} type="button" className={`skill-tag ${requestForm.urgency === u ? 'selected' : ''}`}
                          onClick={() => setRequestForm(p => ({ ...p, urgency: u }))}>{u}</button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="btn btn-accent form-submit">Submit Request</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <Chatbot />
    </div>
  );
}
