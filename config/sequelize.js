const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const connection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    pool: {
      max: 5,
      min: 1,
      acquire: 30000,
      idle: 60000
    }
  }
);

module.exports = connection;