import { Center, Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { AiOutlineBackward } from 'react-icons/ai';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { favouriteRequest, fetchFavourites } from '../api-requests';
import { favouriteData } from '../redux/actions';

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

  return (
    <>
      <Flex>
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
        <h1>{wod.title}</h1>
        <h2>{wod.description}</h2>
        <h2>{wod.image}</h2>
        {ids.includes(wod.id)
          ? <button type="button" id="unfavourite" onClick={handleSubmit}>Unstar</button>
          : <button type="button" id="favourite" onClick={handleSubmit}>Star</button>}

      </Flex>
    </>
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
