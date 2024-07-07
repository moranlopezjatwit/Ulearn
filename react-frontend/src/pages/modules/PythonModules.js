import React, { useContext } from 'react';
import { LanguageContext } from '../../LanguageContext'; // Corrected path
import PythonSidenav from '../../Controls/PythonSidenav';


export default function PythonModules() {
  const { languages } = useContext(LanguageContext);
  const pythonModules = languages.find(lang => lang.name === 'Python').modules;

  return (
      <div id="App-container">
          <PythonSidenav />
          <div>
              <h1 class="Section-header">Python Modules</h1>
              

          </div>
    </div>
  );
}

/*               
<ul>
{pythonModules.map((module, index) => (
    <li key={index}>{module}</li>
))}
</ul>*/
