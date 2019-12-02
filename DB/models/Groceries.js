// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

var Groceries = sequelize.define("groceries", {
    user_id: {
        type: Sequelize.INTEGER,
        model: "users",
        key: "user_id"// <<< Note, its a column name
    },
    food_name: {
        type:Sequelize.STRING,
        primaryKey: true,
    },
    experation_date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expired: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

// Syncs with DB
Groceries.sync();

module.exports = Groceries;