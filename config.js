import dotenv from "dotenv";
dotenv.config();

export default {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  Port: process.env.Port,
  tokenKey: process.env.TOKEN_KEY,
};
