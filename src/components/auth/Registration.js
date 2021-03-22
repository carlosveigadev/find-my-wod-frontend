import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import submitUserData from '../../api/index';

const Registration = props => {
  const history = useHistory();
  const { handleSuccessfulAuth } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = event => {
    submitUserData({
      email, password, passwordConfirmation, handleSuccessfulAuth,
    });
    history.push('/dashboard');
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
    return null;
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

Registration.propTypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};

export default Registration;
