
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import IntroSidenav from '../Controls/IntroSidenav';

function Introduction() {
  const { languages } = useContext(LanguageContext);

  return (
    <div class="Introduction-body">
        <IntroSidenav />
        <h2 id="Introduction-header">Getting Started</h2>
        <p className="Introduction-paragraph"></p>

    </div>
  );
}

export default Introduction;
