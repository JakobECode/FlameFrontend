import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported
import './LogRegStyles.css';

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

        console.log('Registration successful');
        navigate('/login'); // Redirect to login page after successful registration
      } catch (error) {
        console.error('Registration failed:', error);
      }
    };

    return (
      <div className="container mt-5">
        <form onSubmit={handleSubmit} className="card card-body">
          <h2 className="text-center mb-4">Register</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              id="firstName"
              value={userDetails.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
              value={userDetails.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="roleName">Role Name:</label>
            <input
              type="text"
              className="form-control"
              name="roleName"
              id="roleName"
              value={userDetails.roleName}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Register</button>
        </form>
      </div>
    );
};

export default Register;