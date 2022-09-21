import { Sequelize, DataTypes } from "sequelize";
import config from "./config.js";

const db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: {
      trustedconnection: false,
      encrypt: false,
      trustServerCertificate: false,
      enableArithAbort: false,
    },
  },
});

const Book = db.define("books", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.DATEONLY,
  },
  subject: {
    type: DataTypes.INTEGER,
  },
});

db.sync()
  .then(() => {
    console.log("Book table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

export default db;
