import Nav from './Nav'
import './styles/Header.scss'
import Logo from './Logo.js'

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <Nav />
    </div>
  );
}

export default Header;
