import React, { useState } from 'react';

const Registration = () => {
  const [email, setEmail] = useState('');
  // const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  // const [registrationErrors, setRegistrationErrors] = useState('');

  const handleSubmit = event => {
    console.log('Form Submitted');
    event.preventDefault();
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'password_confirmation':
        setPasswordConfirmation(event.target.value);
        break;
      default:
        return null;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password_confirmation"
          placeholder="Password Confirmation"
          value={passwordConfirmation}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
