const Sequelize = require("sequelize")

const db = new Sequelize("appscrip", "postgres", "postgresdsa", {
    host: "localhost",
    dialect: "postgres"
});

db.authenticate()
    .then(res => {
        console.log("DB connection is established")
    })

module.exports = db