
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Introduction() {
  const { languages } = useContext(LanguageContext);

  return (
    <div className="">



        <h2 class="Page-header">Programming Languages and Modules</h2>
        {languages.map((language, index) => (
          <div class="Body" key={index}>
            <h3>{language.name}</h3>
            <ul>
              {language.modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>
          </div>
        ))}

    </div>
  );
}

export default Introduction;
