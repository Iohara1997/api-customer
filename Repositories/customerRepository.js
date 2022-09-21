import Customer from "../Models/customerModel.js";

async function findAll() {
  try {
    const customers = await Customer.findAll();
    return customers;
  } catch (error) {
    console.error(error);
  }
}

async function findCustomer(customerId) {
  try {
    const customer = await Customer.findByPk(customerId);
    return customer;
  } catch (error) {
    console.error(error);
  }
}

async function createCustomer(customer) {
  try {
    const customerCreated = await Customer.create(customer);
    return customerCreated;
  } catch (error) {
    console.error(error);
  }
}

async function updateCustomer(customerId, customer) {
  try {
    await Customer.update(customer, {
      where: {
        id_customer: customerId,
      },
    });
    const customerUpdated = await Customer.findByPk(customerId);
    return customerUpdated;
  } catch (error) {
    console.error(error);
  }
}

async function deleteCustomer(customerId) {
  try {
    await Customer.destroy({
      where: {
        id_customer: customerId,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export default {
  findAll,
  findCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
