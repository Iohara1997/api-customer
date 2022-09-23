import express from "express";
import customerController from "../Controllers/customerController.js";
import verifyToken from "../Middlewares/auth.js";

const router = express.Router();

router.get("/customer/:id", verifyToken, customerController.getCustomerById);
router.put("/customer/:id", verifyToken, customerController.putCustomer);
router.get("/customer", verifyToken, customerController.getAllCustomers);
router.post("/customer", verifyToken, customerController.postCustomer);
router.delete("/customer/:id", verifyToken, customerController.deleteCustomer);

export { router as default };
