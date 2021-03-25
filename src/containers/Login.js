import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router';
import { logInUser } from '../api-requests';
import { userData } from '../redux/actions';

const Login = ({ userData }) => {
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

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await logInUser(state);
    if (data.statusText === 'OK') {
      const populateReduxStore = {
        isLoggedIn: true,
        userToken: data.data.auth_token,
        userInfo: jwt(data.data.auth_token).email,
      };
      userData(populateReduxStore);
      history.push('/');
    }
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

const mapDispatch = {
  userData,
};

Login.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Login);
