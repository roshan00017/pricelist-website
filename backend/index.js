const fastify = require("fastify")({ logger: true });
const cors = require("@fastify/cors");
const pricelistRoutes = require("./routes/pricelist.route");
const { sequelize } = require("./models");

// Read allowed origins from environment (comma-separated)
const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(",")
  : ["http://localhost:5173"]; // default for local dev

fastify.register(cors, {
  origin: (origin, cb) => {
    // Allow requests with no origin (Postman, server-side)
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    cb(new Error("Not allowed by CORS"), false);
  },
});

// Register routes
fastify.register(pricelistRoutes);

const start = async () => {
  try {
    await sequelize.authenticate();
    fastify.log.info("Database connection has been established successfully.");

    // Use dynamic port from environment or fallback to 3002
    const port = process.env.PORT || 3002;
    const host = process.env.HOST || "0.0.0.0"; // bind to all interfaces

    await fastify.listen({ port, host });
    fastify.log.info(`Server listening on ${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
