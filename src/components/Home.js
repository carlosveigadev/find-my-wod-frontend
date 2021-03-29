import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Center, Flex, Box, Text,
} from '@chakra-ui/react';
import Navbar from './Navbar';
import Wods from '../containers/Wods';
import style from '../assets/css/Home.module.css';

const Home = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <h1>
          Hi, here you can check all the Wods available.
        </h1>
        <Wods />
      </>
    );
  }
  return (
    <Box
      bgSize="100% 100%"
      bgPosition="Center"
      bgImage="url(../assets/images/logo.jpg)"
      bgRepeat="no-repeat"
    >
      <Box bgColor="rgb(255, 255, 255, 0.65)">
        <Center color="black">
          <Flex flexDirection="column" h="100vh" pt="35vh">
            <Box py="1em">
              <Text align="center" fontSize="xl">Welcome to Find my Wod!</Text>
              <Text align="center" fontSize="xs">Choose an option to start.</Text>
            </Box>
            <Link class={style.button} to={{ pathname: '/login' }}> Log In </Link>
            <Link class={style.button} to={{ pathname: '/signin' }}>Sign In</Link>
          </Flex>
        </Center>
      </Box>

    </Box>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.userStore.isLoggedIn,
});

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
