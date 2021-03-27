import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { favouriteRequest, fetchFavourites } from '../api-requests';
import { favouriteData } from '../redux/actions';

const WodsId = ({
  location, favouriteWods, userToken, favouriteData,
}) => {
  const { wod } = location.state;

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
      <h1>{wod.title}</h1>
      <h2>{wod.description}</h2>
      <h2>{wod.image}</h2>
      {ids.includes(wod.id)
        ? <button type="button" id="unfavourite" onClick={handleSubmit}>Unstar</button>
        : <button type="button" id="favourite" onClick={handleSubmit}>Star</button>}
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
