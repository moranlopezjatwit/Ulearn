import React, { useState } from 'react';
import { login } from './api';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(formData);
      localStorage.setItem('token', data.token);
      // Redirect or perform actions after successful login
    } catch (error) {
      console.error('Error logging in', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
