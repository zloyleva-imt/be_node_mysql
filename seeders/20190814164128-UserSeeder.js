'use strict';
const faker = require('faker');
const config = require('../config/config.json');

const getMoreUsers = (Sequelize) => [...Array(10)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  status: faker.random.boolean(),
  roles: faker.random.arrayElement(config.app.roles),
  createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
  updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
}))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', getMoreUsers(Sequelize), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
