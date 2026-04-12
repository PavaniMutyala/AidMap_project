import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import HeatMapLayer from './HeatMapLayer';
import { heatmapData, mapCenter } from '../data/demoData';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const volunteerIcon = new L.DivIcon({
  html: '<div style="background:#10b981;width:14px;height:14px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 6px rgba(16,185,129,0.5)"></div>',
  iconSize: [14, 14],
  className: '',
});

const requestIcon = (urgency) => {
  const colors = { Critical: '#ef4444', High: '#f97316', Medium: '#f59e0b', Low: '#10b981' };
  const color = colors[urgency] || '#f59e0b';
  return new L.DivIcon({
    html: `<div style="background:${color};width:16px;height:16px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 8px ${color}80;animation:pulse 2s infinite"></div>`,
    iconSize: [16, 16],
    className: '',
  });
};

export default function MapView({
  volunteers = [],
  requests = [],
  showVolunteers = true,
  showRequests = true,
  showHeatmap = true,
  heatType = 'crisis',
  height = '450px',
  className = 'map-container',
}) {
  // Use passed data and map real urgency, or fallback to demo heatmapData
  const urgencyWeight = { Critical: 1.0, High: 0.8, Medium: 0.5, Low: 0.2 };
  
  const crisisHeat = requests && requests.length > 0 
    ? requests.map(r => [r.lat, r.lng, urgencyWeight[r.urgency] || 0.5])
    : heatmapData.crisisHeat;

  const volHeat = volunteers && volunteers.length > 0 
    ? volunteers.map(v => [v.lat, v.lng, 0.8])
    : heatmapData.volunteerHeat;

  const heatPoints = heatType === 'volunteer' ? volHeat : crisisHeat;

  return (
    <div className={className} style={{ height }}>
      <MapContainer
        center={mapCenter}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {showHeatmap && heatPoints.length > 0 && <HeatMapLayer points={heatPoints} />}

        {showVolunteers && volunteers.map(v => (
          <Marker key={`v-${v._id || v.id}`} position={[v.lat, v.lng]} icon={volunteerIcon}>
            <Popup>
              <div className="map-popup">
                <h4>🟢 {v.name}</h4>
                <p><strong>Skill:</strong> {v.skill}</p>
                <p><strong>Status:</strong> {v.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {showRequests && requests.map(r => (
          <Marker key={`r-${r._id || r.id}`} position={[r.lat, r.lng]} icon={requestIcon(r.urgency)}>
            <Popup>
              <div className="map-popup">
                <h4>🔴 {r.type} Help Needed</h4>
                <p><strong>Urgency:</strong> {r.urgency}</p>
                <p>{r.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
