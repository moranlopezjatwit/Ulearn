import React, { useState } from 'react';
import { register } from '../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const registerUser = async () => {
    const userData = { username, password, email };
    console.log('Sending user data:', userData);
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error registering user:', error.response?.data || error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={registerUser}>Register</button>
    </div>
  );
};

export default Register;
