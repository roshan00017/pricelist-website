const pricelistController = require("../controllers/pricelist.controller");

async function pricelistRoutes(fastify, options) {
  fastify.get("/api/pricelist", pricelistController.getPricelist);
}

module.exports = pricelistRoutes;
