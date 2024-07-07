import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Corrected path

function CppModules() {
  const { languages } = useContext(LanguageContext);
  const cppModules = languages.find(lang => lang.name === 'C++').modules;

  return (
      <div id="App-container">
          <h1 class="Section-header">C++ Modules</h1>
      <ul>
        {cppModules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default CppModules;
