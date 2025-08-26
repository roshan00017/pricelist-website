import React, { useState, useEffect } from "react";
import { fetchPricelist, editPricelistItem } from "../../api/api";
import "./Pricelist.css";
import {
  FiSearch,
  FiPlus,
  FiPrinter,
  FiMoreVertical,
  FiCheck,
  FiX,
} from "react-icons/fi";

const Pricelist = ({ isSidebarOpen }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editItemId, setEditItemId] = useState(null);
  const [editedValues, setEditedValues] = useState({});

  useEffect(() => {
    const getPricelist = async () => {
      const data = await fetchPricelist();
      setItems(data);
      setLoading(false);
    };
    getPricelist();
  }, []);

  const handleEdit = (itemId) => {
    setEditItemId(itemId);
    const itemToEdit = items.find((item) => item.id === itemId);
    setEditedValues({ ...itemToEdit });
  };

  const handleChange = (e, field) => {
    setEditedValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSave = async (itemId) => {
    try {
      const updatedItem = await editPricelistItem(itemId, editedValues);

      const updatedItems = items.map((item) =>
        item.id === itemId ? { ...item, ...updatedItem } : item
      );
      setItems(updatedItems);
      setEditItemId(null);
      setEditedValues({});
      console.log("Saved item:", updatedItem);
    } catch (error) {
      alert("Failed to save changes. Please try again.", error);
    }
  };

  const handleCancel = () => {
    setEditItemId(null);
    setEditedValues({});
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={`content ${isSidebarOpen ? "with-sidebar" : ""}`}>
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
              <FiSearch className="search-btn-icon blue-icon" />
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
              <FiSearch className="search-btn-icon blue-icon" />
            </button>
          </div>
        </div>
        <div className="action-buttons pill-actions">
          <button className="btn btn-new pill-btn" aria-label="Add new product">
            <FiPlus className="btn-icon" />
            <span className="btn-text">New Product</span>
          </button>
          <button
            className="btn btn-print pill-btn"
            aria-label="Print pricelist"
          >
            <FiPrinter className="btn-icon" />
            <span className="btn-text">Print List</span>
          </button>
          <button
            className="btn btn-advanced pill-btn"
            aria-label="Advanced mode"
          >
            <FiMoreVertical className="btn-icon" />
            <span className="btn-text">Advanced mode</span>
          </button>
        </div>
      </div>
      <div className="table-container">
        <table className="data-table custom-pill-table">
          <thead>
            <tr>
              <th className="col-desktop col-tablet">Article No.</th>
              <th className="col-desktop col-tablet col-mobile">
                Product/Service
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
                <td
                  className="col-desktop col-tablet"
                  onClick={() => !editItemId && handleEdit(item.id)}
                >
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      value={editedValues.id || ""}
                      onChange={(e) => handleChange(e, "id")}
                      className="edit-input"
                    />
                  ) : (
                    <span
                      className={`pill-bio ${
                        editItemId === item.id ? "selected" : ""
                      }`}
                    >
                      {item.id}
                    </span>
                  )}
                </td>
                <td
                  className="col-desktop col-tablet col-mobile"
                  onClick={() => !editItemId && handleEdit(item.id)}
                >
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      value={editedValues.product_service || ""}
                      onChange={(e) => handleChange(e, "product_service")}
                      className="edit-input"
                    />
                  ) : (
                    <span
                      className={`pill-bio ${
                        editItemId === item.id ? "selected" : ""
                      }`}
                    >
                      {item.product_service}
                    </span>
                  )}
                </td>
                <td
                  className="col-desktop col-tablet"
                  onClick={() => !editItemId && handleEdit(item.id)}
                >
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      value={editedValues.in_price || ""}
                      onChange={(e) => handleChange(e, "in_price")}
                      className="edit-input"
                    />
                  ) : (
                    <span className="pill-bio">{item.in_price}</span>
                  )}
                </td>
                <td
                  className="col-desktop col-tablet col-mobile"
                  onClick={() => !editItemId && handleEdit(item.id)}
                >
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      value={editedValues.price || ""}
                      onChange={(e) => handleChange(e, "price")}
                      className="edit-input"
                    />
                  ) : (
                    <span className="pill-bio">{item.price}</span>
                  )}
                </td>
                <td
                  className="col-desktop col-tablet"
                  onClick={() => !editItemId && handleEdit(item.id)}
                >
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      value={editedValues.unit || ""}
                      onChange={(e) => handleChange(e, "unit")}
                      className="edit-input"
                    />
                  ) : (
                    <span className="pill-bio">{item.unit || "-"}</span>
                  )}
                </td>
                <td
                  className="col-desktop"
                  onClick={() => !editItemId && handleEdit(item.id)}
                >
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      value={editedValues.in_stock || ""}
                      onChange={(e) => handleChange(e, "in_stock")}
                      className="edit-input"
                    />
                  ) : (
                    <span className="pill-bio">{item.in_stock || "-"}</span>
                  )}
                </td>
                <td
                  className="col-desktop"
                  onClick={() => !editItemId && handleEdit(item.id)}
                >
                  {editItemId === item.id ? (
                    <input
                      type="text"
                      value={editedValues.description || ""}
                      onChange={(e) => handleChange(e, "description")}
                      className="edit-input"
                    />
                  ) : (
                    <span className="pill-bio">{item.description || "-"}</span>
                  )}
                </td>
                <td>
                  {editItemId === item.id ? (
                    <>
                      <span
                        className="more-dots more-dots-pill"
                        onClick={() => handleSave(item.id)}
                      >
                        <FiCheck className="more-dots-icon" size={20} />
                      </span>
                      <span
                        className="more-dots more-dots-pill"
                        onClick={handleCancel}
                      >
                        <FiX className="more-dots-icon" size={20} />
                      </span>
                    </>
                  ) : (
                    <span
                      className="more-dots more-dots-pill"
                      onClick={() => handleEdit(item.id)}
                    >
                      <FiMoreVertical className="more-dots-icon" size={20} />
                    </span>
                  )}
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
