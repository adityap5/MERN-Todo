import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password
      });
      alert('User registered successfully');
      setUsername('');
      setPassword('');
    } catch (error) {
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-10 p-10 mt-12 place-items-center">
      <div>
        <label className='mr-2'>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-18'
        />
      </div>
      <div>
        <label className='mr-3'>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className='p-2 rounded-md bg-zinc-800 text-white font-semibold w-18'
        />
      </div>
      <button type="submit" className=" bg-green-700 font-semibold p-2 w-20 rounded-lg ml-16">Register</button>
    </form>
  );
};

export default Register;
