import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      navigate('/Home');
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" value={formData.email} onChange={onChange} required />
        <input type="password" name="password" value={formData.password} onChange={onChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
