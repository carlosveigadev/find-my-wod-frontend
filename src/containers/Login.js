import { useState } from 'react';
import { logInUser } from '../api-requests';

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
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
    logInUser(state);
  };

  return (
    <form>
      <h1>Log In</h1>
      <h2>Hello there! Log in to start using Find My Wod.</h2>
      <input type="email" id="email" placeholder="email" required onChange={handleChange} />
      <input type="password" id="password" placeholder="password" required onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Log In</button>
    </form>
  );
};

export default Login;
