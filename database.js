import { Sequelize } from "sequelize";
import config from "./config.js";

const db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  dialect: "mssql",
  host: "db",
  dialectOptions: {
    options: {
      trustedconnection: false,
      encrypt: false,
      trustServerCertificate: false,
      enableArithAbort: false,
    },
  },
});

export default db;
