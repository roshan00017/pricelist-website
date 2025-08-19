import "./Header.css";
import { FaUserCircle, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="user-info">
          <FaUserCircle size={40} className="avatar-icon" />
          <div className="user-details">
            <div className="user-name">John Andre</div>
            <div className="company">Storfjord AS</div>
          </div>
        </div>
        <div className="hamburger-menu">
          <FaBars size={24} />
        </div>
      </div>
      <div className="header-right">
        <div className="language-selector">
          <span>English</span>
          <img
            src="https://flagcdn.com/gb.svg"
            alt="UK Flag"
            className="flag"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
