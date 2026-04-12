import { FiUsers, FiCheckCircle, FiAlertTriangle, FiActivity, FiMapPin, FiCpu } from 'react-icons/fi';
import DashboardTabs from '../components/DashboardTabs';
import StatsCard from '../components/StatsCard';
import MapView from '../components/MapView';
import { WeeklyLineChart, WeeklyBarChart } from '../components/WeeklyChart';
import AISuggestions from '../components/AISuggestions';
import { crisisLocations, volunteers, helpRequests, weeklyData } from '../data/demoData';

export default function CommandDashboard() {
  const totalDeployed = weeklyData.volunteersDeployed.reduce((a, b) => a + b, 0);
  const totalCompleted = weeklyData.helpCompleted.reduce((a, b) => a + b, 0);

  return (
    <div className="dashboard" id="command-dashboard">
      <DashboardTabs />
      <div className="dashboard-header" style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12, background: 'var(--gradient-primary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem'
          }}>⚡</div>
          <div>
            <h1>Command Center</h1>
            <p>Global analytics and real-time system overview</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
          <span style={{
            width: 8, height: 8, borderRadius: '50%', background: '#10b981',
            animation: 'ripple 2s infinite'
          }} />
          <span style={{ fontSize: '0.85rem', color: 'var(--success)' }}>System Active – All Services Online</span>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Stats */}
        <div className="stats-row">
          <StatsCard icon={<FiUsers />} value={totalDeployed} label="Volunteers Deployed (Week)" trend="+12% vs last week" trendDir="up" color="blue" />
          <StatsCard icon={<FiCheckCircle />} value={totalCompleted} label="Requests Completed (Week)" trend="+18% vs last week" trendDir="up" color="green" />
          <StatsCard icon={<FiAlertTriangle />} value={crisisLocations.length} label="Active Crisis Zones" trend="2 critical" trendDir="down" color="red" />
          <StatsCard icon={<FiActivity />} value="92%" label="System Efficiency" trend="+4%" trendDir="up" color="purple" />
        </div>

        {/* Charts */}
        <div className="dashboard-grid">
          <WeeklyLineChart />
          <WeeklyBarChart />
        </div>

        {/* Heatmap + Crisis List */}
        <div className="dashboard-grid">
          <div className="panel">
            <div className="panel-header">
              <h3><FiMapPin /> Crisis Zone Heatmap</h3>
              <span style={{ fontSize: '0.78rem', color: 'var(--danger)', fontWeight: 600 }}>
                🔴 Live
              </span>
            </div>
            <div className="panel-body no-pad">
              <MapView height="420px" showHeatmap={true} heatType="crisis" />
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3><FiAlertTriangle /> Crisis Zones</h3>
            </div>
            <div className="panel-body">
              <div className="task-list">
                {crisisLocations.map(loc => (
                  <div key={loc.id} className="task-card">
                    <div className="task-card-header">
                      <h4>{loc.name}</h4>
                      <span className={`task-badge ${loc.severity.toLowerCase()}`}>{loc.severity}</span>
                    </div>
                    <div className="task-meta">
                      <span>🏷️ {loc.type}</span>
                      <span>👥 {loc.affectedPeople} affected</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Real-time updates simulation */}
              <div style={{ marginTop: 20, padding: 16, background: 'var(--bg)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', animation: 'ripple 2s infinite' }} />
                  Real-time Updates
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--success)' }}>●</span>
                    <span>Volunteer Amit deployed to Electronic City – <em>2 min ago</em></span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--warning)' }}>●</span>
                    <span>New help request in Koramangala – <em>5 min ago</em></span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--primary-light)' }}>●</span>
                    <span>Medical supplies delivered to Whitefield – <em>8 min ago</em></span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <span style={{ color: 'var(--success)' }}>●</span>
                    <span>Food distribution completed at Jayanagar – <em>12 min ago</em></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Suggestions */}
        <div className="dashboard-grid-3">
          <AISuggestions />
          <div className="panel">
            <div className="panel-header">
              <h3><FiCpu /> System Summary</h3>
            </div>
            <div className="panel-body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { label: 'Volunteer Utilization', value: 80, color: '#3b82f6' },
                  { label: 'Request Coverage', value: 72, color: '#10b981' },
                  { label: 'AI Match Accuracy', value: 95, color: '#7c3aed' },
                  { label: 'Response Speed', value: 88, color: '#f97316' },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: 6 }}>
                      <span>{item.label}</span>
                      <span style={{ fontWeight: 700, color: item.color }}>{item.value}%</span>
                    </div>
                    <div className="resource-bar">
                      <div className="resource-bar-fill" style={{ width: `${item.value}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
