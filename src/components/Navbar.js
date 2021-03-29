import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Flex, Text } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

function Navbar({ email }) {
  return (
    <Flex direction="column" pl="1em" mt="2em">
      <FaUserCircle size="4em" />
      <Text my="1em" as="em">{email}</Text>
      <Text mt="4em" mb="1em"><Link to="/">Dashboard </Link></Text>
      <Text my="1em"><Link to="/favourites">Favourites </Link></Text>
      <Text my="1em"><Link to="/about">About </Link></Text>
      <Text alignSelf="bottom" fontSize="sm" mt="22em">Logout</Text>
    </Flex>
  );
}

const mapStateToProps = state => ({
  email: state.userStore.userInfo,
});

Navbar.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Navbar);
