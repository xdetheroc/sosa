import { Sequelize } from "sequelize/types";
import { ProductModel } from "../../product/model/ProductModel";
import { DataTypes } from 'sequelize';

export function InitModel(sequelize: Sequelize) {
    ProductModel.init({
        product_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        product_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        product_description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        date_created: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        date_updated: {
            type: DataTypes.DATE,
            allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'product',
        freezeTableName: true,
        timestamps: true,
        createdAt: 'date_created',
        updatedAt: 'date_updated',
        underscored: true
      },);
}