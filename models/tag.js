// -- Tag Model --
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init({
    /* === Primary Key: ID === */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    /* === Tag Name === */
    tag_name: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'tag',
    /* === Custom Options === */
    underscored: true,
});

module.exports = Tag;