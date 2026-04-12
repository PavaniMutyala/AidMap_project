import { FiCheckCircle, FiMapPin, FiAlertTriangle, FiClock } from 'react-icons/fi';
import DashboardTabs from '../components/DashboardTabs';
import StatsCard from '../components/StatsCard';
import NotificationPanel from '../components/NotificationPanel';
import MapView from '../components/MapView';
import AISuggestions from '../components/AISuggestions';
import Chatbot from '../components/Chatbot';
import { helpRequests } from '../data/demoData';

export default function VolunteerDashboard() {
  const nearbyRequests = helpRequests.slice(0, 6);

  return (
    <div className="dashboard" id="volunteer-dashboard">
      <DashboardTabs />
      <div className="dashboard-header">
        <h1>🤝 Volunteer Dashboard</h1>
        <p>Find nearby help requests, view crisis areas, and get AI task suggestions</p>
      </div>
      <div className="dashboard-content">
        {/* Stats */}
        <div className="stats-row">
          <StatsCard icon={<FiAlertTriangle />} value="6" label="Nearby Requests" trend="2 urgent" trendDir="up" color="orange" />
          <StatsCard icon={<FiCheckCircle />} value="12" label="Tasks Completed" trend="+3 this week" trendDir="up" color="green" />
          <StatsCard icon={<FiMapPin />} value="3" label="Crisis Areas Near You" color="red" />
          <StatsCard icon={<FiClock />} value="24h" label="Avg Response Time" trend="-2h improved" trendDir="up" color="blue" />
        </div>

        {/* Map + Notifications */}
        <div className="dashboard-grid">
          <div className="panel">
            <div className="panel-header">
              <h3><FiMapPin /> Crisis Areas Heatmap</h3>
            </div>
            <div className="panel-body no-pad">
              <MapView height="380px" showHeatmap={true} heatType="crisis" showRequests={true} showVolunteers={false} />
            </div>
          </div>
          <NotificationPanel />
        </div>

        {/* Nearby help requests */}
        <div className="dashboard-grid">
          <div className="panel">
            <div className="panel-header">
              <h3><FiAlertTriangle /> Nearby Help Requests</h3>
            </div>
            <div className="panel-body">
              <div className="task-list">
                {nearbyRequests.map(req => {
                  const distance = (Math.random() * 4 + 0.5).toFixed(1);
                  const skillMatch = req.type === 'Medical' || req.type === 'Food' || req.type === 'Emergency Support';
                  return (
                    <div key={req.id} className="task-card">
                      <div className="task-card-header">
                        <h4>{req.type}</h4>
                        <span className={`task-badge ${req.urgency.toLowerCase()}`}>{req.urgency}</span>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 8 }}>{req.description}</p>
                      <div className="task-meta">
                        <span>📍 {distance} km away</span>
                        <span>🎯 Skill Match: <strong style={{ color: skillMatch ? 'var(--success)' : 'var(--text-muted)' }}>{skillMatch ? 'Yes' : 'No'}</strong></span>
                        <span>🕐 {req.time}</span>
                      </div>
                      <div className="task-actions">
                        <button className="btn btn-accent btn-sm">Accept Task</button>
                        <button className="btn btn-outline btn-sm">View on Map</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <AISuggestions />
        </div>
      </div>

      <Chatbot />
    </div>
  );
}
