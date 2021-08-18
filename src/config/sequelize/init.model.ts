import { Sequelize } from "sequelize/types";
import { ProductModel } from "../../product/model/ProductModel";
import { CustomerModel } from "../../customer/model/CustomerModel";
import { OrderModel } from '../../order/model/OrderModel';
import { OrderDetailModel } from "../../order/model/OrderDetailModel";
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

    OrderModel.init({
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
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
      modelName: 'order',
      freezeTableName: true,
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscored: true
    },);
    
    OrderDetailModel.init({
      order_detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
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
      modelName: 'order_detail',
      freezeTableName: true,
      timestamps: true,
      createdAt: 'date_created',
      updatedAt: 'date_updated',
      underscored: true
    },);
    
    ProductModel.hasMany(OrderDetailModel, {
      foreignKey: 'product_id'
    });
    OrderDetailModel.belongsTo(ProductModel, {
      foreignKey: 'product_id'
    });

    CustomerModel.hasMany(OrderModel, {
      foreignKey: 'customer_id'
    });
    OrderModel.belongsTo(CustomerModel, {
      foreignKey: 'customer_id'
    });

        
    OrderModel.hasMany(OrderDetailModel, {
      foreignKey: 'order_id',
      as: 'order_details'
    });
    
    OrderDetailModel.belongsTo(OrderModel, {
      foreignKey: 'order_id'
    });
}