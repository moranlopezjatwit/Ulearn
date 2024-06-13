
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Introduction() {
  const { languages } = useContext(LanguageContext);

  return (
    <div className="App">

          <aside className="Sidebar-nav">
      <div classname="Sidebar-references">
        <p><a href="/">Home</a></p>
        <p><a href="/introduction">Introduction</a></p>
        <p><a href="/python-modules">Python Modules</a></p>
        <p><a href="/java-modules">Java Modules</a></p>
        <p><a href="/cpp-modules">C++ Modules</a></p>
        <p className="Credit"><a href="/about">About</a></p>
      </div>
      </aside>

        <h2 className="Section-header">Programming Languages and Modules</h2>
        {languages.map((language, index) => (
          <div classname="languages" key={index}>
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
