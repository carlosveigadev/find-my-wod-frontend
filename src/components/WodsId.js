import PropTypes from 'prop-types';

const WodsId = ({ location }) => {
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
