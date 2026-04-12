import { Link } from 'react-router-dom';
import { FiMapPin, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="nav-logo" style={{ justifyContent: 'center', marginBottom: 16 }}>
          <div className="logo-icon"><FiMapPin /></div>
          Aid<span className="accent">Map</span>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/map">Live Map</Link>
          <Link to="/dashboard/ngo">Dashboards</Link>
        </div>
        <p style={{ marginTop: 16 }}>
          Made with <FiHeart style={{ color: '#ef4444', verticalAlign: 'middle' }} /> for communities in need
        </p>
        <p style={{ marginTop: 8, fontSize: '0.78rem' }}>
          © 2026 AidMap – Smart Volunteer Allocation System
        </p>
      </div>
    </footer>
  );
}
