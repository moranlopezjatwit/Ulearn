import React, { createContext, useState } from 'react';
import jwtDecode from 'jwt-decode';  // Ensure this import is here

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

