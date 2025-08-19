import {
  FaFileInvoiceDollar,
  FaUsers,
  FaBuilding,
  FaBook,
  FaTags,
  FaLayerGroup,
  FaMoneyBillWave,
  FaClipboardList,
  FaBoxes,
  FaUserFriends,
  FaFileImport,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="menu-header">Menu</div>
      <nav className="menu">
        <a href="#" className="menu-item">
          <FaFileInvoiceDollar className="icon" />
          Invoices
        </a>
        <a href="#" className="menu-item">
          <FaUsers className="icon" />
          Customers
        </a>
        <a href="#" className="menu-item">
          <FaBuilding className="icon" />
          My Business
        </a>
        <a href="#" className="menu-item">
          <FaBook className="icon" />
          Invoice Journal
        </a>
        <a href="#" className="menu-item active">
          <FaTags className="icon" />
          Price List
        </a>
        <a href="#" className="menu-item">
          <FaLayerGroup className="icon" />
          Multiple Invoicing
        </a>
        <a href="#" className="menu-item">
          <FaMoneyBillWave className="icon" />
          Unpaid Invoices
        </a>
        <a href="#" className="menu-item">
          <FaClipboardList className="icon" />
          Offer
        </a>
        <a href="#" className="menu-item">
          <FaBoxes className="icon" />
          Inventory Control
        </a>
        <a href="#" className="menu-item">
          <FaUserFriends className="icon" />
          Member Invoicing
        </a>
        <a href="#" className="menu-item">
          <FaFileImport className="icon" />
          Import/Export
        </a>
        <a href="#" className="menu-item">
          <FaSignOutAlt className="icon" />
          Log out
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
