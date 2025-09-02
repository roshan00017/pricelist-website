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
    return <div className="pl-pricelist-loading">Loading...</div>;
  }

  return (
    <main className={`pl-main${isSidebarOpen ? " pl-main--sidebar" : ""}`}>
      <div className="pl-container">
        {/* HEADER: Search section and actions */}
        <header className="pl-header">
          <div className="pl-search-section">
            <div className="pl-search-group">
              <input
                type="text"
                placeholder="Search Article No..."
                className="pl-search-input"
              />
              <button
                className="pl-search-btn"
                aria-label="Search by article number"
              >
                <FiSearch className="pl-search-icon pl-search-icon--primary" />
              </button>
            </div>
            <div className="pl-search-group">
              <input
                type="text"
                placeholder="Search Product..."
                className="pl-search-input"
              />
              <button
                className="pl-search-btn"
                aria-label="Search by product name"
              >
                <FiSearch className="pl-search-icon pl-search-icon--primary" />
              </button>
            </div>
          </div>
          <div className="pl-action-buttons">
            <button
              className="pl-action-btn pl-action-btn--new"
              aria-label="Add new product"
            >
              <FiPlus className="pl-action-btn-icon pl-action-btn-icon--green" />
              <span className="pl-action-btn-text">New Product</span>
            </button>
            <button className="pl-action-btn" aria-label="Print pricelist">
              <FiPrinter className="pl-action-btn-icon pl-action-btn-icon--blue" />
              <span className="pl-action-btn-text">Print List</span>
            </button>
            <button className="pl-action-btn" aria-label="Advanced mode">
              <FiMoreVertical className="pl-action-btn-icon" />
              <span className="pl-action-btn-text">Advanced mode</span>
            </button>
          </div>
        </header>
        {/* TABLE */}
        <div className="pl-table-container">
          <table className="pl-table">
            <thead>
              <tr>
                <th>
                  <div className="pl-th-content">
                    Article No.
                    <span className="pl-th-arrow pl-th-arrow--blue">
                      &#x25BC;
                    </span>
                  </div>
                </th>
                <th>
                  <div className="pl-th-content">
                    Product/Service
                    <span className="pl-th-arrow pl-th-arrow--green">
                      &#x25BC;
                    </span>
                  </div>
                </th>
                <th>In Price</th>
                <th>Price</th>
                <th>Unit</th>
                <th>In Stock</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr className="pl-table-row" key={item.id}>
                  <td onClick={() => !editItemId && handleEdit(item.id)}>
                    <div className="pl-cell-flex">
                      <span className="pl-arrow-cell pl-arrow-cell--blue">
                        &#x2192;
                      </span>
                      {editItemId === item.id ? (
                        <input
                          type="text"
                          value={editedValues.id || ""}
                          onChange={(e) => handleChange(e, "id")}
                          className="pl-edit-input"
                        />
                      ) : (
                        <span className="pl-pill">{item.id}</span>
                      )}
                    </div>
                  </td>
                  <td onClick={() => !editItemId && handleEdit(item.id)}>
                    {editItemId === item.id ? (
                      <input
                        type="text"
                        value={editedValues.product_service || ""}
                        onChange={(e) => handleChange(e, "product_service")}
                        className="pl-edit-input"
                      />
                    ) : (
                      <span className="pl-pill">{item.product_service}</span>
                    )}
                  </td>
                  <td onClick={() => !editItemId && handleEdit(item.id)}>
                    {editItemId === item.id ? (
                      <input
                        type="text"
                        value={editedValues.in_price || ""}
                        onChange={(e) => handleChange(e, "in_price")}
                        className="pl-edit-input"
                      />
                    ) : (
                      <span className="pl-pill">{item.in_price}</span>
                    )}
                  </td>
                  <td onClick={() => !editItemId && handleEdit(item.id)}>
                    {editItemId === item.id ? (
                      <input
                        type="text"
                        value={editedValues.price || ""}
                        onChange={(e) => handleChange(e, "price")}
                        className="pl-edit-input"
                      />
                    ) : (
                      <span className="pl-pill">{item.price}</span>
                    )}
                  </td>
                  <td onClick={() => !editItemId && handleEdit(item.id)}>
                    {editItemId === item.id ? (
                      <input
                        type="text"
                        value={editedValues.unit || ""}
                        onChange={(e) => handleChange(e, "unit")}
                        className="pl-edit-input"
                      />
                    ) : (
                      <span className="pl-pill">{item.unit || "-"}</span>
                    )}
                  </td>
                  <td onClick={() => !editItemId && handleEdit(item.id)}>
                    {editItemId === item.id ? (
                      <input
                        type="text"
                        value={editedValues.in_stock || ""}
                        onChange={(e) => handleChange(e, "in_stock")}
                        className="pl-edit-input"
                      />
                    ) : (
                      <span className="pl-pill">{item.in_stock || "-"}</span>
                    )}
                  </td>
                  <td onClick={() => !editItemId && handleEdit(item.id)}>
                    {editItemId === item.id ? (
                      <input
                        type="text"
                        value={editedValues.description || ""}
                        onChange={(e) => handleChange(e, "description")}
                        className="pl-edit-input"
                      />
                    ) : (
                      <span className="pl-pill">{item.description || "-"}</span>
                    )}
                  </td>
                  <td>
                    {editItemId === item.id ? (
                      <div className="pl-action-save-cancel">
                        <span
                          className="pl-action-icon"
                          onClick={() => handleSave(item.id)}
                        >
                          <FiCheck size={20} />
                        </span>
                        <span className="pl-action-icon" onClick={handleCancel}>
                          <FiX size={20} />
                        </span>
                      </div>
                    ) : (
                      <span
                        className="pl-action-icon"
                        onClick={() => handleEdit(item.id)}
                      >
                        <FiMoreVertical size={20} />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Pricelist;
