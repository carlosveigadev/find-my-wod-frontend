import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Home = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <>
        <Navbar />
        <h1>
          Hi, here you can check all the Wods available.
        </h1>
      </>
    );
  }
  return (
    <>
      <Link to={{ pathname: '/login' }}>Log In</Link>
      <Link to={{ pathname: '/signin' }}>Sign In</Link>
    </>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});

Home.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
