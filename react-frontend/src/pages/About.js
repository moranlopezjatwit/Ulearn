import React from 'react';

function About() {
    return (
        <div className="aboutpage">
            <h1>About Us</h1>
            <br />
            <br />
            <p>
                The demand for personalized educational resources in the field of computer science is on the rise, reflecting the
                broader trend towards online learning. ULearn aims to address this need by providing a platform that utilizes predictive
                algorithms to deliver tailored learning materials to users based on their coding interests and proficiency levels.
                Our team is committed to creating a community-driven learning experience where learners can engage with high-quality
                educational content and support each other's growth.
            </p>

            <br />
           

            <p>
                At ULearn, our mission is to democratize computer science education by offering personalized learning experiences that
                empower learners to achieve their full potential. We believe in the power of tailored education to transform lives and
                are dedicated to providing resources that cater to the unique needs and goals of each individual learner.
            </p>

            <br />

            <p>
                ULearn's main goal is to provide individualized learning materials to people who are interested in programming. The platform
                will suggest relevant content, including readings, coding exercises, and tutorials, based on an analysis of user profiles and
                preferences. In contrast to current solutions, ULearn will feature sophisticated predictive algorithms to improve the precision
                and potency of its suggestions.
            </p>

            <br />
            <br />
            <br />

            <h2>Contact Us</h2>
            <p>
                Address: 550 Huntington Ave, Boston, MA 02115<br />
                Email: <a href="mailto:student@wit.edu">student@wit.edu</a><br />
                Phone: 123-456-7890
            </p>

            <p className="credits">
                ULearn was created by Juan Moran Lopez, Nathaniel Simms, and Brandon Norris. Credits for any imagery, media, and references used will eventually go here.
            </p>
        </div>
    );
}

export default About;
