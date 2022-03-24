import './style.css';
import logo from './logo.svg';

/**
 * It renders the header of the application.
 * @component
 */
function Header() {
  return (
    <header>
      <img src={logo} alt="SportSee logo" id="logo" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
