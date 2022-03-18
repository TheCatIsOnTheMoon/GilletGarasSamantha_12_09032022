import './style.css';
import logo from './logo.svg';

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
