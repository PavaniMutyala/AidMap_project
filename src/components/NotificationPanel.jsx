import { useState, useEffect } from 'react';
import { FiBell } from 'react-icons/fi';
import { fetchNotifications } from '../services/api';

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifs = async () => {
      try {
        const data = await fetchNotifications();
        setNotifications(data);
      } catch (err) {
        console.error("Notifications fetch failed:", err);
      }
    };
    loadNotifs();
  }, []);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3><FiBell /> Notifications (Live)</h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          {notifications.filter(n => !n.read).length} unread
        </span>
      </div>
      <div className="panel-body">
        <div className="notification-list">
          {notifications.map(notif => (
            <div key={notif._id} className={`notification-item ${!notif.read ? 'unread' : ''}`}>
              <div className={`notif-dot ${notif.type}`} />
              <div className="notif-content">
                <h4>{notif.title}</h4>
                <p>{notif.message}</p>
              </div>
              <span className="notif-time">{notif.time || 'Just now'}</span>
            </div>
          ))}
          {notifications.length === 0 && <p style={{ textAlign: 'center', padding: 20 }}>No notifications found.</p>}
        </div>
      </div>
    </div>
  );
}
