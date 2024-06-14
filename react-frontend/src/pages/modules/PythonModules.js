import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Corrected path

function PythonModules() {
  const { languages } = useContext(LanguageContext);
  const pythonModules = languages.find(lang => lang.name === 'Python').modules;

  return (
    <div>
          <h1 class="Section-header">Python Modules</h1>
      <ul>
        {pythonModules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default PythonModules;
