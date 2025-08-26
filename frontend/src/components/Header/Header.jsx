import "./Header.css";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useState } from "react";

const Header = ({ onSidebarToggle }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (onSidebarToggle) onSidebarToggle(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <div className="hamburger-menu" onClick={handleToggle}>
          <FaBars size={24} />
        </div>
        <div className="user-info">
          <FaUserCircle size={40} className="avatar-icon" />
          <div className="user-details">
            <div className="user-name">John Andre</div>
            <div className="company">Storfjord AS</div>
          </div>
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
