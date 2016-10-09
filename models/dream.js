'use strict';
module.exports = function(sequelize, DataTypes) {
  var Dream = sequelize.define('Dream', {
  		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Dream.belongsTo(models.User);
      }
    }
  });
  return Dream;
};