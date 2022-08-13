const { DataTypes } = require("sequelize")
const database = require("../database")

const Book = database.define("book", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Book
