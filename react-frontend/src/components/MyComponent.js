import React, { useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, value };
    try {
      const response = await axios.post('http://localhost:5000/api/data', data);
      console.log(response.data);
    } catch (error) {
      console.error('There was an error saving the data!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value"
        />
        <button onClick={registerUser} style={styles.button}>Register</button>
      </form>
    </div>
  );
};

export default MyComponent;
