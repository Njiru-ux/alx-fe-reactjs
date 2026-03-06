import React from 'react';
import './Pages.css';

function ProfileSettings() {
  return (
    <div className="profile-section">
      <h2>Profile Settings</h2>
      <form className="settings-form">
        <div className="form-group">
          <label htmlFor="notification">Email Notifications:</label>
          <select id="notification" name="notification">
            <option value="all">All notifications</option>
            <option value="important">Important only</option>
            <option value="none">None</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="darkMode" /> Dark Mode
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" name="publicProfile" /> Public Profile
          </label>
        </div>
        <button type="submit" className="save-btn">Save Settings</button>
      </form>
    </div>
  );
}

export default ProfileSettings;