import {
  AspectRatio, Center, Flex, Box, Heading, Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { AiOutlineBackward } from 'react-icons/ai';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { favouriteRequest, fetchFavourites } from '../api-requests';
import { favouriteData } from '../redux/actions';
import style from '../assets/css/WodsId.module.css';

const WodsId = ({
  location, favouriteWods, userToken, favouriteData,
}) => {
  const { wod } = location.state;
  const history = useHistory();

  const ids = [];
  favouriteWods.map(item => ids.push(item.id));

  const handleSubmit = async e => {
    const status = e.target.id;
    await favouriteRequest(wod.id, status, userToken);
    const newData = await fetchFavourites(userToken);
    favouriteData(newData);
  };

  const video = `https://www.youtube.com/embed/${wod.image}`;

  return (
    <Flex direction="column" mt="2em" alignItems="center">
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
      <Box mt="2em">
        <AspectRatio maxW="440px" ratio={4 / 3}>
          <iframe
            title={wod.title}
            src={video}
            allowFullScreen
          />
        </AspectRatio>
        <Box mx="2em" mt="1em">
          <Heading s="h1" size="lg">{wod.title}</Heading>
          <Text my="1em">{wod.description}</Text>
          {ids.includes(wod.id)
            ? (
              <button className={style.button} type="button" id="unfavourite" onClick={handleSubmit}>
                Remove from Favourites
              </button>
            )
            : <button className={style.button} type="button" id="favourite" onClick={handleSubmit}>Add to Favourites</button>}
        </Box>
      </Box>
    </Flex>
  );
};

WodsId.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  favouriteWods: PropTypes.arrayOf(PropTypes.object).isRequired,
  userToken: PropTypes.string.isRequired,
  favouriteData: PropTypes.func.isRequired,
};

const mapDispatch = {
  favouriteData,
};

const mapStateToProps = state => ({
  favouriteWods: state.favouriteStore,
  userToken: state.userStore.userToken,
});

export default connect(mapStateToProps, mapDispatch)(WodsId);
