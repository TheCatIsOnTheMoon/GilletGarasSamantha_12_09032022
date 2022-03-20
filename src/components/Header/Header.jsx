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
      <p>Accueil</p>
      <p>Profil</p>
      <p>Réglage</p>
      <p>Communauté</p>
    </header>
  );
}

export default Header;
