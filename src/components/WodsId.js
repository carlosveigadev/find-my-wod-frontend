import PropTypes from 'prop-types';

const WodsId = ({ location }) => {
  // add option to make the wod favourite or not,
  // checking the reduxStore to see if its a favourite or not
  const { wod } = location.state;
  return (
    <>
      <h1>{wod.title}</h1>
      <h2>{wod.description}</h2>
      <h2>{wod.image}</h2>
    </>
  );
};

WodsId.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default WodsId;
