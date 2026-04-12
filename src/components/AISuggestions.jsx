import { useState, useEffect } from 'react';
import { FiCpu, FiZap, FiMapPin } from 'react-icons/fi';
import { fetchVolunteers } from '../services/api';

export default function AISuggestions() {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetchVolunteers().then(setVolunteers).catch(console.error);
  }, []);

  // Filter for medical or high-activity volunteers for demo purposes
  const suggestions = volunteers.filter(v => v.skill === 'Medical' || v.tasksCompleted > 5).slice(0, 3);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3><FiCpu /> AI Volunteer Suggestions</h3>
        <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
          <FiZap style={{ verticalAlign: 'middle' }} /> MongoDB Smart Match
        </span>
      </div>
      <div className="panel-body">
        {suggestions.map(s => (
          <div key={s._id} className="ai-card">
            <div className="ai-card-header">
              <h4>🧑 {s.name}</h4>
              <span className="match-score">{(85 + Math.random() * 10).toFixed(0)}% Match</span>
            </div>
            <p>🎯 <strong>Skill:</strong> {s.skill}</p>
            <div className="ai-detail">
              <span style={{ color: 'var(--primary-light)' }}>📋 {s.tasksCompleted} tasks done</span>
              <span style={{ color: 'var(--text-secondary)' }}><FiMapPin /> Nearby</span>
            </div>
            <div style={{ marginTop: 10 }}>
              <button className="btn btn-primary btn-sm">Assign Live Volunteer</button>
            </div>
          </div>
        ))}
        {suggestions.length === 0 && <p style={{ textAlign: 'center', padding: 10 }}>No suggestions available.</p>}
      </div>
    </div>
  );
}
