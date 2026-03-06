import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';  // Add Routes, Route
import ProfileDetails from '../pages/ProfileDetails';
import ProfileSettings from '../pages/ProfileSettings';
import '../pages/Pages.css';

function Profile() {
  const location = useLocation();
  
  const isDetailsActive = location.pathname === '/profile' || location.pathname === '/profile/details';
  const isSettingsActive = location.pathname === '/profile/settings';

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      <div className="profile-container">
        <nav className="profile-nav">
          <Link 
            to="/profile/details" 
            className={isDetailsActive ? 'active' : ''}
          >
            Profile Details
          </Link>
          <Link 
            to="/profile/settings" 
            className={isSettingsActive ? 'active' : ''}
          >
            Settings
          </Link>
        </nav>
        <div className="profile-content">
          {/* Define nested routes here */}
          <Routes>
            <Route index element={<ProfileDetails />} />
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Profile;