import express from "express";
import router from "./routes/route.js";

const app = express();

const port = process.env.Port || 5000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Server is up and running on port number + ${port}`);
});
