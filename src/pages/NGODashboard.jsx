import { useState, useEffect } from 'react';
import { FiUsers, FiAlertCircle, FiMapPin, FiActivity } from 'react-icons/fi';
import DashboardTabs from '../components/DashboardTabs';
import StatsCard from '../components/StatsCard';
import NotificationPanel from '../components/NotificationPanel';
import MapView from '../components/MapView';
import { WeeklyLineChart } from '../components/WeeklyChart';
import AISuggestions from '../components/AISuggestions';
import { fetchVolunteers, fetchHelpRequests } from '../services/api';

export default function NGODashboard() {
  const [volunteers, setVolunteers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [vData, rData] = await Promise.all([fetchVolunteers(), fetchHelpRequests()]);
        setVolunteers(vData);
        setRequests(rData);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) return <div className="dashboard" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><h2>Loading Data from MongoDB...</h2></div>;

  return (
    <div className="dashboard" id="ngo-dashboard">
      <DashboardTabs />
      <div className="dashboard-header">
        <h1>🏛️ NGO Dashboard</h1>
        <p>Overview of live volunteer operations from local MongoDB Compass</p>
      </div>
      <div className="dashboard-content">
        <div className="stats-row">
          <StatsCard icon={<FiUsers />} value={volunteers.length} label="Total Volunteers" trend="+3 this week" trendDir="up" color="blue" />
          <StatsCard icon={<FiAlertCircle />} value={requests.length} label="Active Help Requests" trend="+2 today" trendDir="up" color="orange" />
          <StatsCard icon={<FiMapPin />} value="5" label="Crisis Zones" trend="2 critical" trendDir="down" color="red" />
          <StatsCard icon={<FiActivity />} value="87%" label="Response Rate" trend="+5%" trendDir="up" color="green" />
        </div>

        <div className="dashboard-grid">
          <div className="panel">
            <div className="panel-header">
              <h3><FiMapPin /> Crisis Heatmap</h3>
            </div>
            <div className="panel-body no-pad">
              <MapView 
                height="380px" 
                volunteers={volunteers} 
                requests={requests} 
                showHeatmap={true} 
                heatType="crisis" 
              />
            </div>
          </div>
          <NotificationPanel />
        </div>

        <div className="dashboard-grid">
          <WeeklyLineChart />
          <AISuggestions />
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3><FiAlertCircle /> Active Help Requests (Live Data)</h3>
          </div>
          <div className="panel-body">
            <div className="task-list">
              {requests.map(req => (
                <div key={req._id} className="task-card">
                  <div className="task-card-header">
                    <h4>{req.type} – {req.description}</h4>
                    <span className={`task-badge ${req.urgency.toLowerCase()}`}>{req.urgency}</span>
                  </div>
                  <div className="task-meta">
                    <span>👤 {req.requester}</span>
                    <span>🕐 {new Date(req.createdAt).toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
              {requests.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>No active requests found in MongoDB.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
