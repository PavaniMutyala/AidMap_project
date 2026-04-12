import { NavLink } from 'react-router-dom';
import { FiGrid, FiUsers, FiHeart, FiShield, FiCommand } from 'react-icons/fi';

export default function DashboardTabs() {
  return (
    <div className="dash-tabs">
      <NavLink to="/dashboard/ngo" className={({ isActive }) => `dash-tab ${isActive ? 'active' : ''}`}>
        <FiGrid style={{ verticalAlign: 'middle', marginRight: 6 }} /> NGO
      </NavLink>
      <NavLink to="/dashboard/community" className={({ isActive }) => `dash-tab ${isActive ? 'active' : ''}`}>
        <FiHeart style={{ verticalAlign: 'middle', marginRight: 6 }} /> Community
      </NavLink>
      <NavLink to="/dashboard/volunteer" className={({ isActive }) => `dash-tab ${isActive ? 'active' : ''}`}>
        <FiUsers style={{ verticalAlign: 'middle', marginRight: 6 }} /> Volunteer
      </NavLink>
      <NavLink to="/dashboard/coordinator" className={({ isActive }) => `dash-tab ${isActive ? 'active' : ''}`}>
        <FiShield style={{ verticalAlign: 'middle', marginRight: 6 }} /> Coordinator
      </NavLink>
      <NavLink to="/dashboard/command" className={({ isActive }) => `dash-tab ${isActive ? 'active' : ''}`}>
        <FiCommand style={{ verticalAlign: 'middle', marginRight: 6 }} /> Command Center
      </NavLink>
    </div>
  );
}
