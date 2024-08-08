import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = jwtDecode(token);
      setUser(decodedUser);
      fetchProgress(decodedUser._id);
    }
  }, []);

  const fetchProgress = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/progress/user-progress/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setProgress(res.data);
    } catch (error) {
      console.error('Error fetching progress:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, progress, setProgress }}>
      {children}
    </UserContext.Provider>
  );
};
