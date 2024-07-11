import React, { useState } from 'react';
import { register } from '../api';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(formData);
      localStorage.setItem('token', data.token);
      // Redirect or perform actions after successful registration
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Name" required />
      <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" required />
      <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
