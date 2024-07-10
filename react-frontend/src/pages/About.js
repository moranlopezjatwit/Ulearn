import React from 'react';

function About() {
    return (
        <div id="App-container">

            <h1>About Us</h1>

            <p>
                The demand for personalized educational resources in the field of computer science is on the rise, reflecting the broader trend towards online learning.
                <br /><br />
                ULearn aims to address this need by providing a platform that utilizes predictive algorithms to deliver tailored learning materials to users based on their coding interests and proficiency levels.
                <br /><br />
                Our team is committed to creating a community-driven learning experience where learners can engage with high-quality educational content and support each other's growth.
            </p>

            <p className="credits">
                ULearn was created by Juan Moran Lopez, Nathaniel Simms, and Brandon Norris. Credits for any imagery, media, and references used will eventually go here.
            </p>

            <br />
            <h2>Contact Us</h2>
            <p>
                Address: 550 Huntington Ave, Boston, MA 02115<br />
                Email: <a href="mailto:student@wit.edu">student@wit.edu</a><br />
                Phone: 123-456-7890
            </p>
        </div>
    );
}

export default About;

