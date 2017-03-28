'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define('Burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    customerId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burgers;
};