import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function CppModules() {
  const { languages } = useContext(LanguageContext);
  const cppModules = languages.find(lang => lang.name === 'C++').modules;

  return (
    <div>
      <h1>C++ Modules</h1>
      <ul>
        {cppModules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default CppModules;
