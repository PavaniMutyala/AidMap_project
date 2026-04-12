import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiMapPin, FiClock } from 'react-icons/fi';

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ 
      display: 'flex', alignItems: 'center', gap: 6, 
      color: 'var(--text-secondary)', fontSize: '0.9rem', 
      marginRight: '10px', background: 'rgba(255,255,255,0.05)', 
      padding: '6px 14px', borderRadius: '20px',
      border: '1px solid var(--border)'
    }}>
      <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', animation: 'pulse 1.5s infinite' }}></span>
      <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{time.toLocaleTimeString()}</span>
    </div>
  );
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="nav-logo">
        <div className="logo-icon"><FiMapPin /></div>
        Aid<span className="accent">Map</span>
      </Link>

      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        <LiveClock />
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/map" className={`nav-link ${isActive('/map') ? 'active' : ''}`}>Live Map</Link>
        <Link to="/dashboard/ngo" className={`nav-link ${location.pathname.startsWith('/dashboard') ? 'active' : ''}`}>Dashboards</Link>
        <Link to="/register" className="nav-btn">Register</Link>
      </div>
    </nav>
  );
}
