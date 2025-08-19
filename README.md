# Price List Application

This project contains a simple full-stack application for managing product/service price lists. It is split into two main directories:

- **backend** ― Node.js/Express (Fastify) REST API with PostgreSQL
- **frontend** ― react.js with palin css

## Project Structure

---

## Backend

- **Tech stack**: Fastify, Sequelize, PostgreSQL
- **Location**: `/backend`

### Features

- REST API for CRUD operations on price lists
- CORS support with configurable origins
- Environment-based DB configuration

### Setup

1. Copy `.env.example` to `.env` and fill in your database and allowed origins.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Run DB migrations and seeders (if any):
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   The server defaults to http://localhost:3002.

---

## Frontend

- **Tech stack**: (Specify, e.g., React + Vite)
- **Location**: `/frontend`

### Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend defaults to http://localhost:5173.

---

## Environment Variables

- See `.env.example` files in both folders for required configuration options.
- The backend honors `CORS_ORIGINS` for frontend connection and database configs.

---

## Running the App

1. **Start the backend** (see above)
2. **Start the frontend** (see above)
3. Open your browser to the frontend address

---

## Further Documentation

- See `/backend/README.md` and `/frontend/README.md` (if any) for more instructions.
- Database schema and API details can be found within backend source files.

---

## License

[MIT] or as defined by your organization.
