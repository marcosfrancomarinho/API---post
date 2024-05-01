const { Sequelize, DataTypes } = require("sequelize")
require("dotenv").config({ path: "../.env" })
const sequelize = new Sequelize({
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    username: process.env.USER,
    dialect: "postgres"
})
module.exports = { sequelize, DataTypes }
