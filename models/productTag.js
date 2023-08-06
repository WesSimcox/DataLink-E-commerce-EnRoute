// -- ProductTag Model --
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class ProductTag extends Model {}

ProductTag.init({
    /* === Primary Key: ID === */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    /* === Foreign Key: Product ID === */
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'product',
            key: 'id',
        },
    },
    /* === Foreign Key: Tag ID === */
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tag',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'product_tag',
    /* === Custom Options === */
    underscored: true,
});

module.exports = ProductTag;