import './style.scss';
import logo from './argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <nav class="main-nav">
      <NavLink
        className="main-nav-logo"
        to="/"
      >
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink
          to="/login"
          className="main-nav-item"
        >
          <FontAwesomeIcon icon={faUserCircle} />
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
