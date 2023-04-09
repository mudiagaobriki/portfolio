import NavLinks from "./NavLinks";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} style={{width: 150, height: 70}} alt="Mudiaga Obriki Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
