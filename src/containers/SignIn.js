import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jwt-decode';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box, Flex, Text, useToast,
} from '@chakra-ui/react';
import { SignInRequest } from '../api-requests';
import { userData } from '../redux/actions';
import style from '../assets/css/Authorizaton.module.css';

const SignIn = ({ userData }) => {
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

  const history = useHistory();
  const toast = useToast();

  const handleSubmit = async e => {
    e.preventDefault();
    const data = await SignInRequest(state);
    if (data.statusText === 'Created') {
      const populateReduxStore = {
        isLoggedIn: true,
        userToken: data.data.auth_token,
        userInfo: jwt(data.data.auth_token).email,
      };
      toast({
        position: 'bottom-left',
        title: 'Welcome!',
        description: 'Account Created.',
        status: 'info',
        duration: 3000,
        isClosable: true,
      });
      userData(populateReduxStore);
      history.push('/');
    } else {
      toast({
        position: 'bottom-left',
        title: 'Something went wrong!',
        description: 'Sorry, refresh the page and try again.',
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
            <Text align="center" fontSize="xl">Sign Up</Text>
            <Text align="center" fontSize="xs">Hello there! Sing in to start using Find My Wod.</Text>
            <input type="email" id="emailSignIn" placeholder="E-mail" required onChange={handleChange} />
            <input type="password" id="passwordSignIn" placeholder="Password" required onChange={handleChange} />
            <input type="password" id="password_confirmation" placeholder="Password Confirmation" required onChange={handleChange} />
            <button className={style.button} type="submit" onClick={handleSubmit}>Sign Up</button>
            <button
              type="button"
              onClick={() => {
                history.push('/login');
              }}
            >
              Log In
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

SignIn.propTypes = {
  userData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(SignIn);
