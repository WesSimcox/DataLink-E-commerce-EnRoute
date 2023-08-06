const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecommercedb', 'root', 'MySQL', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
