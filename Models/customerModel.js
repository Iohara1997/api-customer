import { Sequelize } from "sequelize";
import db from "../database.js";

export default db.define("customer", {
  id_customer: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  cpf: {
    type: Sequelize.BIGINT,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});
