import customerRepository from "../Repositories/customerRepository.js";

async function listAllCustomers() {
  const customers = await customerRepository.findAll();
  return customers;
}

async function findCustomerById(customerId) {
  const customer = await customerRepository.findCustomer(customerId);
  return customer;
}

async function addCustomer(customer) {
  const customerCreated = await customerRepository.createCustomer(customer);
  return customerCreated;
}

async function updateCustomer(customerId, customer) {
  const customerUpdated = await customerRepository.updateCustomer(
    customerId,
    customer
  );
  return customerUpdated;
}

async function removeCustomer(customerId) {
  const customerUpdated = await customerRepository.deleteCustomer(customerId);
  return customerUpdated;
}

export default {
  listAllCustomers,
  findCustomerById,
  addCustomer,
  updateCustomer,
  removeCustomer,
};
