import Login from '../containers/Login';
import Navbar from './Navbar';
import SignIn from '../containers/SignIn';

const Home = () => (
  <>
    <Navbar />
    <h1>
      Hi, here you can check all the Wods available.
    </h1>
    <Login />
    <SignIn />
  </>
);

export default Home;
