import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <h2>Image</h2>
      <h3>email</h3>
      <Link to="/">Dashboard </Link>
      <Link to="/favourites">Favourites </Link>
      <Link to="/about">About </Link>
      <h2>Logout</h2>
    </>
  );
}

export default Navbar;
