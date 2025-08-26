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
const updatePricelistItem = async (request, reply) => {
  const { id } = request.params;
  const updateData = request.body;
  try {
    const updatedItem = await pricelistService.update(id, updateData);
    reply.send(updatedItem);
  } catch (error) {
    request.log.error(error);
    if (error.message === "Pricelist item not found") {
      reply.status(404).send({ error: "Pricelist item not found" });
    } else {
      reply.status(500).send({ error: "Failed to update pricelist item" });
    }
  }
};
module.exports = { getPricelist, updatePricelistItem };
