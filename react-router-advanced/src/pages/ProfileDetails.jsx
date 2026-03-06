import React from 'react';
import './Pages.css';

function ProfileDetails() {
  return (
    <div className="profile-section">
      <h2>Profile Details</h2>
      <div className="user-info">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john.doe@example.com</p>
        <p><strong>Member since:</strong> January 2024</p>
        <p><strong>Location:</strong> New York, USA</p>
      </div>
    </div>
  );
}

export default ProfileDetails;