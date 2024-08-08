// src/pages/Home.js
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import QRCodeGenerator from '../components/QRCodeGenerator';
import axios from 'axios';

const HomePage = () => {
  const { user, progress } = useContext(UserContext);
  const [localIp, setLocalIp] = useState('');

  useEffect(() => {
    const fetchLocalIp = async () => {
      try {
        const res = await axios.get('http://localhost:5000/getLocalIp');
        setLocalIp(res.data.ip);
      } catch (error) {
        console.error('Error fetching local IP:', error);
      }
    };

    fetchLocalIp();
  }, []);

  return (
    <div className="Homepage">
      <div className="Hero">
        <h1>Welcome to ULearn</h1>
        <p><em>Your personalized gateway to mastering computer science.</em></p>
        {user ? <p>Hello, {user.username}!</p> : localIp && <QRCodeGenerator url={`http://${localIp}:3000/Register`} />}
      </div>
      <br />
      <div className="Features">
        <h2>Why Choose ULearn?</h2>
        <div className="Feature">
          <h3>Personalized Learning</h3>
          <p>
            - Get tailored learning materials based on your interests and proficiency levels.
            <br />
            - Explore a range of various coding exercises and projects.
            <br />
          </p>
        </div>
        <div className="Feature">
          <h3>Expert Content</h3>
          <p>
            - Access to high-quality resources trusted by industry professionals.
            <br />
            - Learn from real-world case studies and practical examples.
            <br />
          </p>
        </div>
        <div className="Feature">
          <h3>Community Support</h3>
          <p>
            - Join a community of learners and get support from peers and mentors.
            <br />
            - Share your knowledge and contribute to open-source projects.
            <br />
          </p>
        </div>
      </div>
      <div className="Progress">
        <h2>Your Progress</h2>
        {progress.map((p, index) => (
          <div key={index}>
            <h3>{p.module}</h3>
            <p>Score: {p.score}</p>
            <p>Last Accessed: {new Date(p.lastAccessed).toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div className="Testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>"ULearn has transformed the way I approach learning. The personalized content is spot on!"</p>
          <cite>- Happy User</cite>
        </blockquote>
        <blockquote>
          <p>"The community support is amazing. I never feel stuck because there's always resources to help."</p>
          <cite>- Satisfied Learner</cite>
        </blockquote>
      </div>
    </div>
  );
};

export default HomePage;


