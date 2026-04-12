import { useState } from 'react';
import { FiUsers, FiMapPin, FiPackage, FiCheckCircle } from 'react-icons/fi';
import DashboardTabs from '../components/DashboardTabs';
import StatsCard from '../components/StatsCard';
import MapView from '../components/MapView';
import { WeeklyBarChart } from '../components/WeeklyChart';
import { volunteers, resourceTracking } from '../data/demoData';

export default function CoordinatorDashboard() {
  const [assignModal, setAssignModal] = useState(null);

  return (
    <div className="dashboard" id="coordinator-dashboard">
      <DashboardTabs />
      <div className="dashboard-header">
        <h1>🛡️ Coordinator Dashboard</h1>
        <p>Manage volunteers, assign tasks, and track resource distribution</p>
      </div>
      <div className="dashboard-content">
        {/* Stats */}
        <div className="stats-row">
          <StatsCard icon={<FiUsers />} value="15" label="Total Volunteers" trend="12 active" trendDir="up" color="blue" />
          <StatsCard icon={<FiMapPin />} value="5" label="Active Locations" color="orange" />
          <StatsCard icon={<FiPackage />} value="1,045" label="Resources Distributed" trend="+120 today" trendDir="up" color="green" />
          <StatsCard icon={<FiCheckCircle />} value="58" label="Tasks Completed" trend="+8 this week" trendDir="up" color="purple" />
        </div>

        {/* Volunteers + Map */}
        <div className="dashboard-grid">
          <div className="panel">
            <div className="panel-header">
              <h3><FiUsers /> Volunteer List</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{volunteers.length} volunteers</span>
            </div>
            <div className="panel-body">
              <div className="volunteer-list">
                {volunteers.map(v => (
                  <div key={v.id} className="volunteer-row">
                    <div className="volunteer-avatar">{v.avatar}</div>
                    <div className="volunteer-info">
                      <h4>{v.name}</h4>
                      <p>🎯 {v.skill} · 📞 {v.phone}</p>
                    </div>
                    <span className={`volunteer-status ${v.status === 'Active' ? 'active' : 'on-task'}`}>{v.status}</span>
                    <button className="btn btn-primary btn-sm" onClick={() => setAssignModal(v)}>Assign</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3><FiMapPin /> Help Areas Map</h3>
            </div>
            <div className="panel-body no-pad">
              <MapView height="500px" showHeatmap={true} heatType="crisis" />
            </div>
          </div>
        </div>

        {/* Resources + Chart */}
        <div className="dashboard-grid">
          <div className="panel">
            <div className="panel-header">
              <h3><FiPackage /> Resource Distribution</h3>
            </div>
            <div className="panel-body">
              <table className="resource-table">
                <thead>
                  <tr>
                    <th>Resource</th>
                    <th>Distributed</th>
                    <th>Remaining</th>
                    <th>Location</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {resourceTracking.map(res => {
                    const total = res.distributed + res.remaining;
                    const pct = (res.distributed / total * 100).toFixed(0);
                    const color = pct > 70 ? '#10b981' : pct > 40 ? '#f59e0b' : '#ef4444';
                    return (
                      <tr key={res.id}>
                        <td style={{ fontWeight: 600 }}>{res.resource}</td>
                        <td>{res.distributed}</td>
                        <td>{res.remaining}</td>
                        <td style={{ color: 'var(--text-secondary)' }}>{res.location}</td>
                        <td style={{ minWidth: 100 }}>
                          <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{pct}%</div>
                          <div className="resource-bar">
                            <div className="resource-bar-fill" style={{ width: `${pct}%`, background: color }} />
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <WeeklyBarChart />
        </div>
      </div>

      {/* Assign Modal */}
      {assignModal && (
        <div className="modal-overlay" onClick={() => setAssignModal(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3>Assign {assignModal.name}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
              Skill: <strong>{assignModal.skill}</strong> · Status: <strong>{assignModal.status}</strong>
            </p>
            <div className="form-group">
              <label>Select Location</label>
              <select className="form-input">
                <option>Koramangala Flood Zone</option>
                <option>Whitefield Medical Camp</option>
                <option>Jayanagar Food Crisis</option>
                <option>Majestic Shelter Need</option>
                <option>Electronic City Rescue</option>
              </select>
            </div>
            <div className="form-group">
              <label>Task Description</label>
              <textarea className="form-input" rows="3" placeholder="Assign specific task..." />
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-accent" onClick={() => setAssignModal(null)}>Assign Volunteer</button>
              <button className="btn btn-outline" onClick={() => setAssignModal(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
