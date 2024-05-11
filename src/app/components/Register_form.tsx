// components/RegisterForm.js
"use client"
import { BaseSyntheticEvent, useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [preferences, setPreferences] = useState([]) as any;

  const handleSubmit = async (e : BaseSyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, preferences }),
      });
      if (response.ok) {
        setEmail('');
        setName('')
        setPreferences([])
        console.log('Registration successful');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex-row text-black border p-3 rounded-lg backdrop-blur-lg">
      <div className='flex flex-col justify-around my-2'>
        <label>Email:</label>
        <input
          className='rounded-lg px-2 border-none outline-none'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col justify-around my-2'>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          className='rounded-lg px-2 border-none outline-none'
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col justify-around my-2'>
        <label>Preferences:</label>
        <select
          className='rounded-lg px-2 border-none outline-none'
          value={preferences}
          onChange={(e) => setPreferences(Array.from(e.target.selectedOptions, (option) => option.value))}
          required
        >
          <option value="newsletter">Newsletter</option>
          <option value="promotions">Promotions</option>
          <option value="updates">Updates</option>
        </select>
      </div>
      <button className='text-white bg-slate-900 rounded-lg px-2' type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;

