// -- Product Model --
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init({
    /* === Primary Key: ID === */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    /* === Product Name === */
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    /* === Price === */
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            isDecimal: true,
        },
    },
    /* === Stock === */
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            isNumeric: true,
        },
    },
    /* === Foreign Key: Category ID === */
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'category',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'product',
    /* === Custom Options === */
    underscored: true,
});

module.exports = Product;