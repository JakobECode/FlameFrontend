import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false, // Initialt sätter vi detta till false
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Här definierar vi vår API-anropsfunktion
      const response = await fetch('https://localhost:7272/api/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...credentials,
          rememberMe: credentials.rememberMe.toString(), // Konvertera booleskt värde till sträng om ditt API kräver det
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Om login är lyckad, hantera svaret här. Exempelvis spara en token.
      const data = await response.json();
      console.log('Login success', data);
      // Redirect on successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          checked={credentials.rememberMe}
          onChange={handleChange}
        />
        <label htmlFor="rememberMe">Remember me</label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;