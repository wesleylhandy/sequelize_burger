'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define('Customers', {
    customer_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Customers;
};