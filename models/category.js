// -- Category Model --
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init({
    /* === Primary Key: ID === */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    /* === Category Name === */
    category_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'category',
    /* === Custom Options === */
    underscored: true,
});

module.exports = Category;