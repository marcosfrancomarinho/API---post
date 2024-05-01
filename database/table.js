const { sequelize, DataTypes } = require("./connect")

const post = sequelize.define("post", {
    title: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
})
module.exports = post