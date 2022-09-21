import express from "express";
import customerController from "../Controllers/customerController.js";

const router = express.Router();

router.get("/costumer/:id", customerController.getCustomerById);
router.put("/costumer/:id", customerController.putCustomer);
router.get("/costumer", customerController.getAllCustomers);
router.post("/costumer", customerController.postCustomer);
router.delete("/costumer/:id", customerController.deleteCustomer);

export { router as default };
