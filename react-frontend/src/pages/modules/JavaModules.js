import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function JavaModules() {
  const { languages } = useContext(LanguageContext);
  const javaModules = languages.find(lang => lang.name === 'Java').modules;

  return (
    <div>
      <h1>Java Modules</h1>
      <ul>
        {javaModules.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
    </div>
  );
}

export default JavaModules;
