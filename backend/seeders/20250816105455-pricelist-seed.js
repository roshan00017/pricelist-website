"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    const units = ["pcs", "kg", "liter", "box", "set", "pack"];
    const descriptions = [
      "High-quality item.",
      "Limited edition.",
      "Value pack offer.",
      "Best seller in category.",
      "Recommended by professionals.",
      "Popular choice for customers.",
      "Newly launched product.",
      "Eco-friendly option.",
      "Top-rated service.",
      "Special discounted price.",
    ];

    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        product_service: `Product/Service ${i}`,
        in_price: (100 + i).toFixed(2),
        price: (200 + i).toFixed(2),
        vat_rate: (25).toFixed(2),
        row_type: i % 2 === 0 ? "product" : "service",
        unit: units[Math.floor(Math.random() * units.length)],
        in_stock: Math.floor(Math.random() * 100), // random integer from 0 to 99
        description:
          descriptions[Math.floor(Math.random() * descriptions.length)],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Pricelists", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Pricelists", null, {});
  },
};
