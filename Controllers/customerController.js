import customerService from "../Services/customerService.js";

async function getAllCustomers(req, res, next) {
  try {
    const customers = await customerService.listAllCustomers();
    return res.status(200).json(customers);
  } catch (error) {
    next(error);
  }
}

async function getCustomerById(req, res, next) {
  try {
    const { id } = req.params;
    const customer = await customerService.findCustomerById(id);
    return res.status(200).json(customer);
  } catch (error) {
    next(error);
  }
}

async function postCustomer(req, res, next) {
  try {
    const customer = req.body;
    const customerCreated = await customerService.addCustomer(customer);
    return res.status(201).json(customerCreated);
  } catch (error) {
    next(error);
  }
}

async function putCustomer(req, res, next) {
  try {
    const { id } = req.params;
    const customer = req.body;
    const customerUpdated = await customerService.updateCustomer(id, customer);
    return res.status(201).json(customerUpdated);
  } catch (error) {
    next(error);
  }
}

async function deleteCustomer(req, res, next) {
  try {
    const { id } = req.params;
    await customerService.removeCustomer(id);
    return res.status(204).json("Customer deleted.");
  } catch (error) {
    next(error);
  }
}

export default {
  getAllCustomers,
  getCustomerById,
  postCustomer,
  putCustomer,
  deleteCustomer,
};
