const { Pricelist } = require("../models");

class PricelistService {
  async getAll() {
    return Pricelist.findAll();
  }
  async update(id, updateData) {
    const pricelistItem = await Pricelist.findByPk(id);
    if (!pricelistItem) {
      throw new Error("Pricelist item not found");
    }
    await pricelistItem.update(updateData);
    return pricelistItem;
  }
}

module.exports = new PricelistService();
