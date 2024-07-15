
import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import IntroSidenav from '../Controls/IntroSidenav';

function Introduction() {
  const { languages } = useContext(LanguageContext);

    return (
    <div class="Introduction-page">
    <IntroSidenav />
    <div class="Introduction-body">
        <h2 class="Introduction-header">Getting Started</h2>
        <br/>
        <p class="Introduction-paragraph"> We're excited to set you off on your programming adventure! ULearn offers an intensive learning experience, beginning each module with
            basic pseudocode concepts. Gradually, as you gain an understanding of these concepts, you're given the opportunity to express these skills using our interactivecoding environments.</p>

        <h2 class="Introduction-header">Tracking Progress</h2>
        <br />
                <p class="Introduction-paragraph">If you have an account with us, module completion will be tracked and can be reviewed at a later time on your profile.
                     </p>
    </div>
    </div>
    );
}

export default Introduction;
