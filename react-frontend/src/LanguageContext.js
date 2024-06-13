import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [languages, setLanguages] = useState([
    {
      name: 'Python',
      modules: ['Introduction', 'Advanced Topics', 'Data Science', 'Web Development'],
    },
    {
      name: 'Java',
      modules: ['Introduction', 'OOP', 'Data Structures', 'Spring Framework'],
    },
    {
      name: 'C++',
      modules: ['Introduction', 'OOP', 'STL', 'Game Development'],
    },
  ]);

  return (
    <LanguageContext.Provider value={{ languages, setLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};
