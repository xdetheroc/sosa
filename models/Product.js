const Sequelize = require('sequelize');

class Product extends Sequelize.Model {}
module.exports = (sequelize) => {
  Product.init(
    {
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      product_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_created: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      date_updated: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'product',
      freezeTableName: true,
      timestamps: false,
    },
  );
  return Product;
};
