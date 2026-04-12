import { CircleMarker, Tooltip } from 'react-leaflet';

export default function HeatMapLayer({ points }) {
  if (!points || points.length === 0) return null;

  return (
    <>
      {points.map((point, index) => {
        const [lat, lng, intensity] = point;
        let color = '#22c55e'; // Green for low urgency (intensity < 0.5)
        let radius = 8;
        
        if (intensity >= 0.8) {
          color = '#ef4444'; // Red for critical/high
          radius = 16;
        } else if (intensity >= 0.4) {
          color = '#eab308'; // Yellow for medium
          radius = 12;
        }

        return (
          <CircleMarker
            key={index}
            center={[lat, lng]}
            pathOptions={{
              color: color,
              fillColor: color,
              fillOpacity: 0.6,
              weight: 2,
            }}
            radius={radius}
          >
            <Tooltip direction="top">
              Intensity: {intensity} | Need: {intensity >= 0.8 ? 'High' : intensity >= 0.4 ? 'Medium' : 'Low'}
            </Tooltip>
          </CircleMarker>
        );
      })}
    </>
  );
}
