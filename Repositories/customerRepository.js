import Customer from "../Models/customerModel.js";

async function findAll() {
  const customers = await Customer.findAll();
  try {
    if (customers) return customers;
  } catch (error) {
    return res.status(400).json({ error: "Error: " + err });
  }
}

async function findCustomer(customerId) {
  const customer = await Customer.findByPk(customerId);
  try {
    if (customer.id_customer) return customer;
  } catch (error) {
    return res.status(400).json({ error: "Error: " + err });
  }
}

async function createCustomer(customer) {
  const customerCreated = await Customer.create(customer);
  try {
    if (customerCreated.id_customer) return customerCreated;
  } catch (error) {
    return res.status(400).json({ error: "Error: " + err });
  }
}

async function updateCustomer(customerId, customer) {
  await Customer.update(customer, {
    where: {
      id_customer: customerId,
    },
  });
  const customerUpdated = await Customer.findByPk(customerId);
  try {
    if (customerUpdated.id_customer) return customerUpdated;
  } catch (error) {
    return res.status(400).json({ error: "Error: " + err });
  }
}

async function deleteCustomer(customerId) {
  const customer_destroyed = await Customer.destroy({
    where: {
      id_customer: customerId,
    },
  });
  try {
    if (customer_destroyed.id_customer) return customer_destroyed;
  } catch (error) {
    return res.status(400).json({ error: "Error: " + err });
  }
}

export default {
  findAll,
  findCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
