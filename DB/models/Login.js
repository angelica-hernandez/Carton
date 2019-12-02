// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Groceries=require("./Groceries");

var Login = sequelize.define("users", {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    u_name: {
        type:Sequelize.STRING,
        primaryKey: true,
    },
    u_pass: {
        type: Sequelize.STRING,
        allowNull: false
    },
    u_email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Syncs with DB
Login.sync();

Login.hasMany(Groceries);

module.exports = Login;