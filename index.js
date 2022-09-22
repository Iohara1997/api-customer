import express from "express";
import User from "./Models/userModel.js";
import Customer from "./Models/customerModel.js";
import router from "./Routes/costumerRoute.js";
import authRouter from "./Routes/authRoute.js";
import config from "./config.js";
import cors from "cors";

const app = express();

const port = config.Port || 3000;

User.sync({ force: true });
Customer.sync({ force: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server is up and running on port number ${port}`);
});
