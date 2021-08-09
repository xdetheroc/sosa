const { Sequelize } = require('sequelize');

const { db } = require('./config');

const sequelize = new Sequelize(db.name, db.username, db.password, db);
const Product = require('./models/Product')(sequelize);

module.exports = {
  getProducts: async () => Product.findAll(),
};
