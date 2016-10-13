'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
  		text: {
			type: DataTypes.STRING,
		},
		like: {
			type: DataTypes.TEXT,
		},
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Comment.belongsTo(models.Dream);
      }
    }
  });
  return Comment;
};