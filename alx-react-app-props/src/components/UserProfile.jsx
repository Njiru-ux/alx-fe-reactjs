import { useContext } from 'react';
import UserContext from '../context/UserContext';  // ← Updated path

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2 style={{ color: 'blue' }}>{userData.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{userData.age}</span></p>
      <p>Bio: {userData.bio}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;