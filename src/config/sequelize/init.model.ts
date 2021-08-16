import { Sequelize } from "sequelize/types";
import { CustomerModel } from "../../customer/model/CustomerModel";
import { DataTypes } from 'sequelize';

export function InitModel(sequelize: Sequelize) {
    CustomerModel.init({
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_name: {
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
      modelName: 'customer',
      freezeTableName: true,
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscored: true
    },);
}