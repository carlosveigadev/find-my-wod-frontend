import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import jwt from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import {
  Box, Flex, Text, useToast,
} from '@chakra-ui/react';
import { logInUser } from '../api-requests';
import { userData } from '../redux/actions';
import style from '../assets/css/Authorizaton.module.css';

const Login = ({ userData }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const populateReduxStore = (isLoggedIn, userToken, userInfo, userId) => ({
    isLoggedIn,
    userToken,
    userInfo,
    userId,
  });

  const handleChange = e => {
    const { id, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const history = useHistory();
  const toast = useToast();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await logInUser(state);
    if (data.statusText === 'OK') {
      toast({
        position: 'bottom-left',
        title: 'You are Logged In!',
        description: 'Welcome to Find My Wod.',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      userData(populateReduxStore(
        true, data.data.auth_token,
        jwt(data.data.auth_token).email,
        jwt(data.data.auth_token).user_id,
      ));
      history.push('/');
    } else {
      toast({
        position: 'bottom',
        title: 'Invalid Credentials!',
        description: 'Try again or Sign Up.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      bgSize="100% 100%"
      bgPosition="Center"
      bgImage="url(../assets/images/logo.jpg)"
      bgRepeat="no-repeat"
    >
      <Box bgColor="rgb(255, 255, 255, 0.65)">
        <Flex flexDirection="column" h="100vh" pt="35vh">
          <form>
            <Text align="center" fontSize="xl">Log In</Text>
            <Text align="center" fontSize="xs">Hello there! Log in to start using Find My Wod.</Text>
            <input type="email" id="email" placeholder="E-mail" required onChange={handleChange} />
            <input type="password" id="password" placeholder="Password" required onChange={handleChange} />
            <button className={style.button} type="submit" onClick={handleSubmit}>Log In</button>
            <button
              type="button"
              onClick={() => {
                history.push('/signin');
              }}
            >
              Sign Up
            </button>
          </form>
        </Flex>
      </Box>
    </Box>
  );
};

const mapDispatch = {
  userData,
};

Login.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(Login);
