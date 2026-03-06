import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Pages.css';

function Profile() {
  const location = useLocation();
  
  // Check if we're on the exact profile path to determine active tab
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
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;