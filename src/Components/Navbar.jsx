import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <h1 className="nav-logo">
      Bookstore CMS
    </h1>
    <ul className="nav-links">
      <li className="links">
        <Link to="/">BOOKS</Link>
      </li>
      <li className="links">
        <Link className="categories" to="/categories">CATEGORIES</Link>
      </li>
    </ul>
    <div className="profileContainer">
      <img src="https://img.icons8.com/ios-filled/0290ff/20/user.png" alt="user" />
    </div>
  </nav>
);

export default Navbar;
