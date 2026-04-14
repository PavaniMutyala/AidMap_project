import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiMapPin, FiUsers, FiHeart, FiShield, FiZap, FiMap, FiCpu, FiBell, FiArrowRight, FiGlobe } from 'react-icons/fi';
import MapView from '../components/MapView';
import Footer from '../components/Footer';

const AnimatedStat = ({ val, label, color, delay }) => {
  const [count, setCount] = useState(0);
  const numericVal = parseInt(val, 10);
  const isNumber = !isNaN(numericVal);

  useEffect(() => {
    if (!isNumber) return;
    let start = 0;
    const duration = 1500;
    const interval = 16;
    const step = numericVal / (duration / interval);
    let timer;
    const startAnim = () => {
      timer = setInterval(() => {
        start += step;
        if (start >= numericVal) {
          setCount(numericVal);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, interval);
    };
    const dt = setTimeout(startAnim, delay * 1000);
    return () => { clearTimeout(dt); clearInterval(timer); };
  }, [val, delay, isNumber]);

  const display = isNumber ? val.replace(/\d+/, count) : val;

  return (
    <div style={{ 
      textAlign: 'center', 
      minWidth: '130px',
      padding: '0 20px'
    }}>
      <div style={{ fontSize: '3rem', fontWeight: 800, color, fontFamily: 'Outfit', lineHeight: 1 }}>{display}</div>
      <div style={{ fontSize: '0.9rem', color: '#f1f5f9', fontWeight: 500, marginTop: '12px' }}>{label}</div>
    </div>
  );
};

export default function HomePage() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero" style={{
        backgroundImage: `linear-gradient(rgba(24, 36, 51, 0.75), rgba(15, 23, 42, 0.95)), url('https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.jpg?s=612x612&w=0&k=20&c=0fnD_g46lvoZ5NdzX5zYOSM4PzM95ezfs5uMe9D1QKs=')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto', animation: 'fadeInUp 0.8s ease' }}>
          <div className="hero-badge" style={{ background: 'rgba(59, 130, 246, 0.15)', border: '1px solid rgba(59, 130, 246, 0.3)', color: '#3b82f6', display: 'inline-flex', padding: '6px 16px', borderRadius: '999px', fontSize: '0.85rem', marginBottom: '24px', alignItems: 'center', gap: '8px' }}>
            <FiZap /> AI-Powered Crisis Response Platform
          </div>
          <h1 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '20px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <FiMapPin style={{ color: '#3b82f6' }} />
            <span>Aid<span style={{ color: '#f97316' }}>Map</span></span>
          </h1>
          <p className="hero-tagline" style={{ color: '#f1f5f9', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.7' }}>
             <strong>Mapping the Aid.</strong> A comprehensive platform seamlessly bridging the gap between those in need and those who can help. Instantly coordinate volunteers and make a profound local impact.
          </p>
          <div className="hero-buttons" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn-accent btn-lg">
              <FiUsers /> Register Now
            </Link>
            <Link to="/dashboard/ngo" className="btn btn-primary btn-lg">
              <FiShield /> View Dashboard
            </Link>
            <Link to="/map" className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
              <FiMap /> Live Map
            </Link>
          </div>

          {/* Floating stats */}
          <div style={{
            display: 'flex', gap: '32px', justifyContent: 'center', marginTop: '60px',
            flexWrap: 'wrap', animation: 'fadeInUp 1s ease 0.5s both'
          }}>
            {[
              { val: '15+', label: 'Active Volunteers', color: '#10b981' },
              { val: '10+', label: 'Help Requests', color: '#f97316' },
              { val: '5', label: 'Crisis Zones', color: '#ef4444' },
              { val: '95%', label: 'Match Accuracy', color: '#3b82f6' },
            ].map((s, i) => (
              <AnimatedStat key={i} val={s.val} label={s.label} color={s.color} delay={0.6 + i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section" id="how-it-works">
        <div className="section-header">
          <h2>How AidMap Works</h2>
          <div className="section-divider" />
          <p>Simple, intelligent, and effective crisis response in 4 steps</p>
        </div>
        <div className="steps-grid">
          {[
            { num: '1', icon: '📝', title: 'Register', desc: 'Sign up as a volunteer, community member, or coordinator in seconds.' },
            { num: '2', icon: '📍', title: 'Map & Locate', desc: 'Our AI maps help requests and locates nearby volunteers in real-time.' },
            { num: '3', icon: '🤖', title: 'AI Matching', desc: 'Smart algorithms match volunteers by skill, proximity, and urgency.' },
            { num: '4', icon: '✅', title: 'Deliver Help', desc: 'Volunteers respond, coordinators track, and communities get the help they need.' },
          ].map((step, i) => (
            <div key={i} className="step-card animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="step-number">{step.num}</div>
              <div style={{ fontSize: '2rem', marginBottom: 8 }}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MAP PREVIEW ===== */}
      <section className="section" id="map-preview">
        <div className="section-header">
          <h2>Live Crisis Map</h2>
          <div className="section-divider" />
          <p>Real-time visualization of help requests and volunteer locations</p>
        </div>
        <div className="map-preview-section">
          <MapView height="450px" showHeatmap={true} />
          <div style={{
            display: 'flex', gap: 24, justifyContent: 'center', marginTop: 20,
            flexWrap: 'wrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} /> High Help Needed
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} /> Moderate Need
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} /> Volunteers Available
            </span>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="section" id="features">
        <div className="section-header">
          <h2>Key Features</h2>
          <div className="section-divider" />
          <p>Everything you need for effective community crisis response</p>
        </div>
        <div className="features-grid">
          {[
            { icon: <FiMap />, title: 'Interactive Heatmaps', desc: 'Real-time heatmaps showing crisis zones, volunteer density, and help coverage.', color: 'blue' },
            { icon: <FiCpu />, title: 'AI Volunteer Matching', desc: 'Smart algorithms match volunteers by skill, proximity, and request urgency.', color: 'orange' },
            { icon: <FiBell />, title: 'Real-time Notifications', desc: 'Instant alerts for new requests, volunteer assignments, and urgent updates.', color: 'red' },
            { icon: <FiUsers />, title: 'Multi-role Dashboards', desc: 'Dedicated dashboards for NGOs, volunteers, coordinators, and communities.', color: 'green' },
            { icon: <FiShield />, title: 'Command Center', desc: 'Global analytics dashboard for monitoring overall crisis response metrics.', color: 'cyan' },
            { icon: <FiGlobe />, title: 'Community Connect', desc: 'Built-in chatbot and help system for seamless communication between all parties.', color: 'blue' },
          ].map((feat, i) => (
            <div key={i} className="card animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`card-icon ${feat.color}`}>{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section" id="cta">
        <h2>Join the Community</h2>
        <p>Be part of the change. Register as a volunteer, coordinator, or community member today.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/register" className="btn btn-accent btn-lg">
            Get Started <FiArrowRight />
          </Link>
          <Link to="/dashboard/ngo" className="btn btn-outline btn-lg">
            Explore Dashboards
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
