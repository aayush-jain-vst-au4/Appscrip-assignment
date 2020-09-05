const db = require("../database")
const Sequelize = require("sequelize")

let User = db.define("users", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    player: {
        type: Sequelize.STRING,
        allowNull: false
    },
    colours: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: false
    }
}, {
    timestamps: true
})

db.sync( /* { force: true } */ ).then(res => {
    console.log("Users table has been created!")
})

module.exports = User