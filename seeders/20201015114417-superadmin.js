"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  * Add seed commands here.
    //  *
    //  * Example:
    return queryInterface.bulkInsert('Users', [{
      name: "superadmin",
      surname: "superadmin",
      email: "admin@gmail.com",
      password: "$2a$10$wkyHATDTSnU0IWx5f2ju6ec8W/oPdOKenTp7s2i2o/NnE7Fe6atr2",
      role: "superadmin",

    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  },
};
