module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "John",
        email: "john@example.com",
        cpf: "16940292112",
        phone: 8693021211,
        address: "Rua 1, 123",
        cep: "123496",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maria",
        email: "Maria@example.com",
        cpf: "16940292001",
        phone: 8693729211,
        address: "Rua 2, 123",
        cep: "123356",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marcelo",
        email: "Marcelo@example.com",
        cpf: "16940291234",
        phone: 8699029211,
        address: "Rua 3, 123",
        cep: "123446",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
