import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import {
  Box,
  Center, Flex, Heading, Tag, Text,
} from '@chakra-ui/react';
import { AiOutlineBackward } from 'react-icons/ai';

const Favourites = ({ favouriteWods }) => {
  const history = useHistory();
  if (favouriteWods.length !== 0 || favouriteWods === null) {
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
        <Heading as="h1" size="xl" mt="1em">Favourite WODs</Heading>
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
      <Heading align="center" as="h1" size="xl" mt="1em">You have no favorite wods...</Heading>
      <Text my="2em">
        Go back to the Dashboard to add WODs!
      </Text>
    </Flex>
  );
};

Favourites.propTypes = {
  favouriteWods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  favouriteWods: state.favouriteStore,
});

export default connect(mapStateToProps, null)(Favourites);
