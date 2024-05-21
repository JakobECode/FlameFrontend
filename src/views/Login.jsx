import React, { useState } from 'react';
import './LogRegStyles.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');
  //const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials({
      ...credentials,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Rensa tidigare felmeddelanden vid nytt försök
    try {
      const response = await fetch('https://localhost:7272/api/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorMsg = await response.text(); // Försök att få ett mer specifikt felmeddelande från servern
        throw new Error(errorMsg || 'Login failed due to server error');
      }
       
      const data = await response.json();
      console.log('Login success:', data);


      // Spara token i localStorage eller sessionStorage
      if (credentials.rememberMe) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
      } else {
        //sessionStorage.setItem('token', data);
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
      }

      //navigate('/');
      window.location = '/';
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          value={credentials.email}
          onChange={handleChange}
          required
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
          required
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