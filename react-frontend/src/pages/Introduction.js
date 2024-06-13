
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Introduction() {
  const { languages } = useContext(LanguageContext);

  return (
    <div className="App">
      <div className="Top-banner">
        <header className="App-header">
          <h1 className="Homepage-title">HOMEPAGE</h1>
        </header>
      </div>
      <aside className="Sidebar-nav">
        <p><a href="/">Home</a></p>
        <p><a href="/introduction">Introduction</a></p>
        <p><a href="/python-modules">Python Modules</a></p>
        <p><a href="/java-modules">Java Modules</a></p>
        <p><a href="/cpp-modules">C++ Modules</a></p>
        <p className="Credit"><a href="/about">About</a></p>
      </aside>
      <section className="Mainpage-body">
        <h1 className="Section-header">What is ULearn?</h1>
        <p>ULearn is a web-based platform designed to offer personalized educational resources for individuals interested in programming.</p>
        <h2 className="Section-header">Programming Languages and Modules</h2>
        {languages.map((language, index) => (
          <div key={index}>
            <h3>{language.name}</h3>
            <ul>
              {language.modules.map((module, index) => (
                <li key={index}>{module}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Introduction;
