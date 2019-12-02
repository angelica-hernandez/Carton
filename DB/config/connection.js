// Dependencies
var Sequelize = require("sequelize");

var sequelize = new Sequelize("test_db_carton", "root", "root", {
  host: "localhost",
  port: 3307,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});

// Exports the connection for other files to use
module.exports = sequelize;