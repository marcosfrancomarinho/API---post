const { Sequelize, DataTypes } = require("sequelize")
require("dotenv").config({ path: "../.env" })
const sequelize = new Sequelize({
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    username: process.env.USER,
    dialect: "postgres"
})

sequelize.authenticate()
    .then(() => console.log("conectado"))
    .catch(error => console.log(error))
module.exports = { sequelize, DataTypes }
