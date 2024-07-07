
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import IntroSidenav from '../Controls/IntroSidenav';

function Introduction() {
  const { languages } = useContext(LanguageContext);

    return (
    <div id="Introduction-page">
    <IntroSidenav />
    <div id="Introduction-body">
        <h2 id="Introduction-header">Getting Started</h2>
        <br/>
        <p id="Introduction-paragraph"> We're excited to set you off on your programming adventure! ULearn offers an intensive and holistic learning experience, beginning each module with
            basic pseudocode concepts. Gradually, as you gain an understanding of these concepts, you're given the opportunity to express these skills using our interactivecoding environments.</p>

    </div>
    </div>
    );
}

export default Introduction;
