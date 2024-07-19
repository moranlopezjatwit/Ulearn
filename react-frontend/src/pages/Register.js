import React, { useState } from 'react';
import { register } from '../api';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../UserContext';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user', // default role
  });

  const { username, email, password, role } = formData;
  const navigate = useNavigate();

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const userData = { username, email, password, role };
    console.log('Sending user data:', userData);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', userData);
      console.log(res.data);
      setUser(username); // Set the user context
      navigate('/home');
      // Handle successful registration (e.g., redirect, show message)
    } catch (err) {
      console.error(err.response?.data || err.message);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      <form onSubmit={onSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputContainer}>
          <label>Role</label>
          <select name="role" value={role} onChange={onChange} style={styles.input}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
  },
  form: {
    width: '100%',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Register;
