import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone, FiCheck } from 'react-icons/fi';
import { createVolunteer } from '../services/api';

const skills = ['Medical', 'Food Distribution', 'Rescue', 'Teaching', 'General Help'];
const helpTypes = ['Food', 'Medical', 'Shelter', 'Education', 'Emergency Support'];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', skills: [], helpNeeded: [] });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  const toggleItem = (field, item) => {
    setForm(prev => ({
      ...prev,
      [field]: prev[field].includes(item) ? prev[field].filter(i => i !== item) : [...prev[field], item]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // If volunteer, save to MongoDB
      if (form.role === 'Volunteer' || form.role === 'Coordinator') {
        const payload = {
          name: form.name,
          skill: form.skills[0] || 'General Help',
          lat: 12.95 + (Math.random() * 0.1 - 0.05), // Random near Bangalore
          lng: 77.59 + (Math.random() * 0.1 - 0.05),
          phone: form.phone,
          avatar: form.name.split(' ').map(n => n[0]).join('')
        };
        await createVolunteer(payload);
      }
      
      setSubmitted(true);
      setTimeout(() => {
        const routes = {
          'Community Member': '/dashboard/community',
          'Volunteer': '/dashboard/volunteer',
          'Coordinator': '/dashboard/coordinator',
        };
        navigate(routes[form.role] || '/dashboard/community');
      }, 1500);
    } catch (err) {
      console.error("Registration failed:", err);
      alert("Database error: Could not save registration.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="register-page">
        <div className="register-container" style={{ textAlign: 'center' }}>
          <div className="register-card" style={{ padding: 60 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(16,185,129,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: '2rem', color: '#10b981' }}>
              <FiCheck />
            </div>
            <h2>Welcome to AidMap!</h2>
            <p>Registration saved to MongoDB. Redirecting...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page" id="register-page">
      <div className="register-container">
        <div className="register-card">
          <h2>Join AidMap</h2>
          <p className="subtitle">Data will be stored in local MongoDB Compass</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="form-input" placeholder="Full name" value={form.name} onChange={(e) => updateField('name', e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" className="form-input" placeholder="you@example.com" value={form.email} onChange={(e) => updateField('email', e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => updateField('phone', e.target.value)} required />
            </div>

            <div className="form-group">
              <label>Register As</label>
              <div className="role-selector">
                {['Community Member', 'Volunteer', 'Coordinator'].map(r => (
                  <button key={r} type="button" className={`role-option ${form.role === r ? 'selected' : ''}`} onClick={() => updateField('role', r)}>
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {(form.role === 'Volunteer' || form.role === 'Coordinator') && (
              <div className="form-group">
                <label>Skills</label>
                <div className="skills-grid">
                  {skills.map(skill => (
                    <button key={skill} type="button" className={`skill-tag ${form.skills.includes(skill) ? 'selected' : ''}`} onClick={() => toggleItem('skills', skill)}>
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button type="submit" className="btn btn-accent form-submit" disabled={loading || !form.role}>
              {loading ? 'Saving...' : 'Register & Continue →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
