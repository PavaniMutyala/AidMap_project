import MapView from '../components/MapView';

export default function MapPage() {
  return (
    <div className="map-page" id="map-page">
      <div style={{ position: 'relative' }}>
        <MapView
          height="calc(100vh - 70px)"
          className="map-container-full"
          showVolunteers={true}
          showRequests={true}
          showHeatmap={true}
        />

        {/* Legend overlay */}
        <div className="map-legend">
          <h4>🗺️ Map Legend</h4>
          <div className="legend-item">
            <span className="legend-dot red" /> High Help Needed
          </div>
          <div className="legend-item">
            <span className="legend-dot yellow" /> Moderate Need
          </div>
          <div className="legend-item">
            <span className="legend-dot green" /> Volunteers Available
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', margin: '10px 0' }} />
          <div className="legend-item">
            <span style={{ width: 12, height: 12, background: '#10b981', borderRadius: '50%', border: '2px solid #fff', flexShrink: 0 }} />
            Volunteer
          </div>
          <div className="legend-item">
            <span style={{ width: 12, height: 12, background: '#ef4444', borderRadius: '50%', border: '2px solid #fff', flexShrink: 0, animation: 'pulse 2s infinite' }} />
            Help Request
          </div>
        </div>

        {/* Info panel */}
        <div style={{
          position: 'absolute', top: 20, right: 20, zIndex: 500,
          background: 'rgba(15,23,42,0.95)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)', padding: 16, minWidth: 200
        }}>
          <h4 style={{ fontSize: '0.88rem', marginBottom: 10 }}>📊 Live Stats</h4>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <span>🟢 <strong style={{ color: 'var(--success)' }}>15</strong> Volunteers Active</span>
            <span>🔴 <strong style={{ color: 'var(--danger)' }}>10</strong> Help Requests</span>
            <span>⚡ <strong style={{ color: 'var(--warning)' }}>5</strong> Crisis Zones</span>
            <span>🤖 <strong style={{ color: 'var(--primary-light)' }}>AI</strong> Matching Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}
