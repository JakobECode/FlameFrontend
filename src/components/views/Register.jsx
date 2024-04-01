import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import'./FormStyles.css'
// Antag att du har en funktion för att skicka registreringsdata till din API
// import { registerService } from 'path/to/your/services';

const Register = () => {
    const [userDetails, setUserDetails] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      roleName: 'user',
    });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUserDetails({
        ...userDetails,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Ersätt URL med din faktiska endpoint för registrering
        const response = await fetch('https://localhost:7272/api/Account/Register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        // Hantera svaret, t.ex. genom att visa en bekräftelse eller omdirigera användaren
        console.log('Registration successful');
        navigate('/login'); // Omdirigera till inloggningssidan efter lyckad registrering
      } catch (error) {
        console.error('Registration failed:', error);
        // Här kan du hantera och visa eventuella felmeddelanden
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={userDetails.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={userDetails.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="roleName">Role Name:</label>
          <input
            type="text"
            name="roleName"
            id="roleName"
            value={userDetails.roleName}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    );
  };
  
  export default Register;