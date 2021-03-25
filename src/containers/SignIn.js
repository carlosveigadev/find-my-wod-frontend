import { useState } from 'react';
import { SignInRequest } from '../api-requests';

const Login = () => {
  const [state, setState] = useState({
    emailSignIn: '',
    passwordSignIn: '',
    password_confirmation: '',
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    SignInRequest(state);
  };

  return (
    <form>
      <h1>Log In</h1>
      <h2>Hello there! Sing in to start using Find My Wod.</h2>
      <input type="email" id="emailSignIn" placeholder="email" required onChange={handleChange} />
      <input type="password" id="passwordSignIn" placeholder="password" required onChange={handleChange} />
      <input type="password" id="password_confirmation" placeholder="password_confirmation" required onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Sign In</button>
    </form>
  );
};

export default Login;
