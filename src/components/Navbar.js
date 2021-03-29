import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Flex, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { userData, favouriteData } from '../redux/actions';

function Navbar({
  email, userData, favouriteData,
}) {
  const logout = () => {
    const defaultFavourite = [{}];
    const defaultUser = {
      isLoggedIn: false, userToken: '', userInfo: '', userId: '',
    };
    userData(defaultUser);
    favouriteData(defaultFavourite);
  };

  return (
    <Flex direction="column" pl="1em" mt="2em">
      <FaUserCircle size="4em" />
      <Text my="1em" as="em">{email}</Text>
      <Text mt="4em" mb="1em"><Link to="/">Dashboard </Link></Text>
      <Text my="1em"><Link to="/favourites">Favourites </Link></Text>
      <Text my="1em"><Link to="/about">Instructions </Link></Text>
      <button type="button" fontSize="sm" mt="17em" onClick={logout}>Logout</button>
    </Flex>
  );
}

const mapStateToProps = state => ({
  email: state.userStore.userInfo,
});

Navbar.propTypes = {
  email: PropTypes.string.isRequired,
  userData: PropTypes.func.isRequired,
  favouriteData: PropTypes.func.isRequired,

};

const mapDispatch = {
  userData,
  favouriteData,
};

export default connect(mapStateToProps, mapDispatch)(Navbar);
