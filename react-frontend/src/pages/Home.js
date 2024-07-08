import React from 'react';

function Home() {
    return (
        <div id="App-container">
            <style>
                {`
          #App-container {
            display: block; /* Ensure default block layout */
            font-family: Arial, sans-serif;
            padding: 20px;
          }

          .hero {
            text-align: center;
            margin-bottom: 40px;
          }

          .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
          }

          .hero p {
            font-size: 24px;
            margin-bottom: 20px;
          }

          .features {
            margin-bottom: 40px;
          }

          .features h2 {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .features .feature {
            margin-bottom: 20px;
          }

          .features .feature h3 {
            font-size: 24px;
          }

          .features .feature p {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 10px;
          }

          .testimonials {
            margin-bottom: 40px;
          }

          .testimonials h2 {
            font-size: 32px;
            margin-bottom: 20px;
          }

          .testimonials blockquote {
            margin: 20px 0;
            padding: 10px;
            background-color: #f9f9f9;
            border-left: 5px solid #ccc;
          }

          .testimonials cite {
            display: block;
            margin-top: 10px;
            font-size: 14px;
            color: #555;
          }
        `}
            </style>

            <div className="hero">
                <h1>Welcome to ULearn</h1>
                <p style={{ textAlign: 'center' }}>
                    <em>Your personalized gateway to mastering computer science.</em>
                </p>
            </div>

            <div className="features">
                <h2>Why Choose ULearn?</h2>
                <div className="feature">
                    <h3>Personalized Learning</h3>
                    <p>
                        - Get tailored learning materials based on your interests and proficiency levels.
                        <br />
                        - Explore a range of various coding exercises and projects.
                        <br />
                    </p>
                </div>
                <div className="feature">
                    <h3>Expert Content</h3>
                    <p>
                        - Access to high-quality resources trusted by industry professionals.
                        <br />
                        - Learn from real-world case studies and practical examples.
                        <br />
                    </p>
                </div>
                <div className="feature">
                    <h3>Community Support</h3>
                    <p>
                        - Join a community of learners and get support from peers and mentors.
                        <br />
                        - Share your knowledge and contribute to open-source projects.
                        <br />
                    </p>
                </div>
            </div>

            <div className="testimonials">
                <h2>What Our Users Say</h2>
                <blockquote>
                    <p>"ULearn has transformed the way I approach learning. The personalized content is spot on!"</p>
                    <cite>- Happy User</cite>
                </blockquote>
                <blockquote>
                    <p>"The community support is amazing. I never feel stuck because there's always someone ready to help."</p>
                    <cite>- Satisfied Learner</cite>
                </blockquote>
            </div>
        </div>
    );
}

export default Home;
