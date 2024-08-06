import React, { useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const ModulePage = ({ moduleName }) => {
  const { user } = useContext(UserContext);

  const handleCompleteLesson = async (score) => {
    try {
      const res = await axios.post('http://localhost:5000/api/progress/save', {
        module: moduleName,
        score,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Progress saved:', res.data);
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  return (
    <div>
      <h1>{moduleName}</h1>
      {/* Lesson content */}
      <button onClick={() => handleCompleteLesson(100)}>Complete Lesson</button>
    </div>
  );
};

export default ModulePage;
