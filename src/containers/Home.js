import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Center,
  Flex,
  Box,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Heading,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Navbar from '../components/Navbar';
import Wods from './Wods';
import style from '../assets/css/Home.module.css';

const Home = ({ isLoggedIn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  if (isLoggedIn) {
    return (
      <>
        <button className={style.hamburguerIcon} type="button" ref={btnRef} onClick={onOpen}>
          <GiHamburgerMenu />
        </button>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton color="darkgray" />
              <DrawerBody>
                <Navbar />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Center py="0.75em">
          <Heading>WODs</Heading>
        </Center>
        <Wods />
      </>
    );
  } return (
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
            <Link className={style.button} to={{ pathname: '/login' }}> Log In </Link>
            <Link className={style.button} to={{ pathname: '/signin' }}>Sign Up</Link>
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
