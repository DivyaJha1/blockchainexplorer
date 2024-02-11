import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
  const { authState, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {authState.user.username}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
