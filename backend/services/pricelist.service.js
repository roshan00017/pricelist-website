const { Pricelist } = require("../models");

class PricelistService {
  async getAll() {
    return Pricelist.findAll();
  }
}

module.exports = new PricelistService();
