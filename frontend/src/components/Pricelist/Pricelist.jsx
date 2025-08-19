import { useState, useEffect } from "react";
import { fetchPricelist } from "../../api/api";
import "./Pricelist.css";
import {
  FiSearch,
  FiPlus,
  FiPrinter,
  FiSettings,
  FiMoreVertical,
} from "react-icons/fi";

const Pricelist = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPricelist = async () => {
      const data = await fetchPricelist();
      setItems(data);
      setLoading(false);
    };
    getPricelist();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="content">
      <div className="content-header justify-between">
        <div className="search-section vertical-search">
          <div className="search-group">
            <input
              type="text"
              placeholder="Search Article No..."
              className="search-input"
            />
            <button
              className="search-btn rounded-search"
              aria-label="Search by article number"
            >
              <FiSearch className="search-btn-icon" />
            </button>
          </div>
          <div className="search-group">
            <input
              type="text"
              placeholder="Search Product..."
              className="search-input"
            />
            <button
              className="search-btn rounded-search"
              aria-label="Search by product name"
            >
              <FiSearch className="search-btn-icon" />
            </button>
          </div>
        </div>
        <div className="action-buttons pill-actions">
          <button className="btn btn-new pill-btn" aria-label="Add new product">
            <FiPlus style={{ verticalAlign: "middle", marginRight: 4 }} />
            <span className="btn-text">New Product</span>
          </button>
          <button
            className="btn btn-print pill-btn"
            aria-label="Print pricelist"
          >
            <FiPrinter style={{ verticalAlign: "middle", marginRight: 4 }} />
            <span className="btn-text">Print List</span>
          </button>
          <button
            className="btn btn-advanced pill-btn"
            aria-label="Advanced mode"
          >
            <FiSettings style={{ verticalAlign: "middle", marginRight: 4 }} />
            <span className="btn-text">Advanced mode</span>
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table custom-pill-table">
          <thead>
            <tr>
              <th className="col-desktop col-tablet highlighted-header-blue">
                Article No.&nbsp;
                <span className="header-sort-arrow blue">
                  <svg
                    width="14"
                    height="14"
                    style={{ verticalAlign: "middle" }}
                  >
                    <polygon points="7,2 10,7 4,7" fill="#1693e6" />
                    <polygon points="7,12 10,7 4,7" fill="#b9ddff" />
                  </svg>
                </span>
              </th>
              <th className="col-desktop col-tablet col-mobile highlighted-header-green">
                Product/Service&nbsp;
                <span className="header-sort-arrow green">
                  <svg
                    width="14"
                    height="14"
                    style={{ verticalAlign: "middle" }}
                  >
                    <polygon points="7,2 10,7 4,7" fill="#00c781" />
                    <polygon points="7,12 10,7 4,7" fill="#a2f9d4" />
                  </svg>
                </span>
              </th>
              <th className="col-desktop col-tablet">In Price</th>
              <th className="col-desktop col-tablet col-mobile">Price</th>
              <th className="col-desktop col-tablet">Unit</th>
              <th className="col-desktop">In Stock</th>
              <th className="col-desktop">Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="col-desktop col-tablet">
                  <span className="pill-bio">{item.id}</span>
                </td>
                <td className="col-desktop col-tablet col-mobile">
                  <span className="pill-bio">{item.product_service}</span>
                </td>
                <td className="col-desktop col-tablet">
                  <span className="pill-bio">{item.in_price}</span>
                </td>
                <td className="col-desktop col-tablet col-mobile">
                  <span className="pill-bio">{item.price}</span>
                </td>
                <td className="col-desktop col-tablet">
                  <span className="pill-bio">{item.unit || "-"}</span>
                </td>
                <td className="col-desktop">
                  <span className="pill-bio">{item.in_stock || "-"}</span>
                </td>
                <td className="col-desktop">
                  <span className="pill-bio">{item.description || "-"}</span>
                </td>
                <td>
                  <span
                    className="more-dots more-dots-pill"
                    tabIndex={0}
                    aria-label="Row actions"
                  >
                    <FiMoreVertical className="more-dots-icon" size={20} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Pricelist;
