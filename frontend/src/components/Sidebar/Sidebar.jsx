import {
  FaFileAlt,
  FaUsers,
  FaCogs,
  FaBook,
  FaTag,
  FaCopy,
  FaExclamationCircle,
  FaHandPaper,
  FaBox,
  FaUserFriends,
  FaCloud,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">Menu</div>
      <ul className="sidebar-menu">
        <li onClick={onToggle}>
          <FaFileAlt className="icon" /> Invoices
        </li>
        <li onClick={onToggle}>
          <FaUsers className="icon" /> Customers
        </li>
        <li onClick={onToggle}>
          <FaCogs className="icon" /> My Business
        </li>
        <li onClick={onToggle}>
          <FaBook className="icon" /> Invoice Journal
        </li>
        <li onClick={onToggle}>
          <FaTag className="icon" style={{ color: "#28a745" }} /> Price List
        </li>
        <li onClick={onToggle}>
          <FaCopy className="icon" /> Multiple Invoicing
        </li>
        <li onClick={onToggle}>
          <FaExclamationCircle className="icon" style={{ color: "#dc3545" }} />{" "}
          Unpaid Invoices
        </li>
        <li onClick={onToggle}>
          <FaHandPaper className="icon" /> Offer
        </li>
        <li onClick={onToggle}>
          <FaBox className="icon" /> Inventory Control
        </li>
        <li onClick={onToggle}>
          <FaUserFriends className="icon" /> Member Invoicing
        </li>
        <li onClick={onToggle}>
          <FaCloud className="icon" /> Import/Export
        </li>
        <li onClick={onToggle}>
          <FaSignOutAlt className="icon" style={{ color: "#28a745" }} /> Log out
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
