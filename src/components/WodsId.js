import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const WodsId = ({ location, favouriteWods }) => {
  // add option to make the wod favourite or not,
  // checking the reduxStore to see if its a favourite or not
  const { wod } = location.state;

  const ids = [];
  favouriteWods.map(item => ids.push(item.id));

  return (
    <>
      <h1>{wod.title}</h1>
      <h2>{wod.description}</h2>
      <h2>{wod.image}</h2>
      {ids.includes(wod.id)
        ? <button type="button">Unstar</button>
        : <button type="button">Star</button>}
    </>
  );
};

WodsId.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  favouriteWods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  favouriteWods: state.favouriteStore,
});

export default connect(mapStateToProps)(WodsId);
