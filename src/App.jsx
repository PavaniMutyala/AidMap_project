import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import MapPage from './pages/MapPage';
import NGODashboard from './pages/NGODashboard';
import CommunityDashboard from './pages/CommunityDashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';
import CoordinatorDashboard from './pages/CoordinatorDashboard';
import CommandDashboard from './pages/CommandDashboard';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/dashboard/ngo" element={<NGODashboard />} />
        <Route path="/dashboard/community" element={<CommunityDashboard />} />
        <Route path="/dashboard/volunteer" element={<VolunteerDashboard />} />
        <Route path="/dashboard/coordinator" element={<CoordinatorDashboard />} />
        <Route path="/dashboard/command" element={<CommandDashboard />} />
      </Routes>
    </>
  );
}

export default App;
