const pricelistController = require("../controllers/pricelist.controller");

async function pricelistRoutes(fastify, options) {
  fastify.patch("/api/pricelist/:id", pricelistController.updatePricelistItem);
  fastify.get("/api/pricelist", pricelistController.getPricelist);
}

module.exports = pricelistRoutes;
