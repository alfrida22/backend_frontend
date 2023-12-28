// Logout.js
import React from 'react';
import { useAuth } from '../../hooks/AuthContext';

const Logout = () => {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    // Lakukan tindakan logout, misalnya membersihkan state dan mengarahkan pengguna ke halaman login
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
