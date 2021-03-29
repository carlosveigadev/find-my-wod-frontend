import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import {
  Box,
  Center, Flex, Heading, Tag,
} from '@chakra-ui/react';
import { AiOutlineBackward } from 'react-icons/ai';

const Favourites = ({ favouriteWods }) => {
  const history = useHistory();
  if (favouriteWods.length !== 0) {
    return (
      <Flex direction="column" m="2em">
        <Center>
          <button
            type="button"
            onClick={() => {
              history.goBack();
            }}
          >
            <AiOutlineBackward fontSize="2em" color="darkgray" />
          </button>
        </Center>
        <Heading as="h1" size="xl" mt="1em">Favourite Wods</Heading>
        <Box mt="2em">
          {favouriteWods.map(wod => (
            <Tag key={wod.id} p="15px" mr="1em" fontSize="1.5em" colorScheme="orange">
              <Link to={{ pathname: `/wods/${wod.id}`, state: { wod } }}>
                {wod.title}
              </Link>
            </Tag>
          ))}
        </Box>

      </Flex>
    );
  }
  return (
    <>
      <h1>You have no favorite wods...</h1>
      <h1>
        Click
        {' '}
        <Link to="/">Here</Link>
        {' '}
        to go trough the Dashboard.
        {' '}
      </h1>
    </>
  );
};

Favourites.propTypes = {
  favouriteWods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  favouriteWods: state.favouriteStore,
});

export default connect(mapStateToProps, null)(Favourites);
