const bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("12345", salt);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "test",
        email: "test@email.com",
        password: hash,
        token: "test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
