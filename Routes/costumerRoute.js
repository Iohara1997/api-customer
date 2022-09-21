import express from "express";
import customerController from "../Controllers/customerController.js";
import verifyToken from "../Middlewares/auth.js";

const router = express.Router();

router.get("/costumer/:id", verifyToken, customerController.getCustomerById);
router.put("/costumer/:id", verifyToken, customerController.putCustomer);
router.get("/costumer", verifyToken, customerController.getAllCustomers);
router.post("/costumer", verifyToken, customerController.postCustomer);
router.delete("/costumer/:id", verifyToken, customerController.deleteCustomer);

export { router as default };
