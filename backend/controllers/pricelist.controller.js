const pricelistService = require("../services/pricelist.service");

const getPricelist = async (request, reply) => {
  try {
    const items = await pricelistService.getAll();
    reply.send(items);
  } catch (error) {
    request.log.error(error);
    reply.status(500).send({ error: "Failed to fetch pricelist" });
  }
};

module.exports = { getPricelist };
