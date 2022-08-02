'use strict';
module.exports = (sequelize, DataTypes) => {
  const Likes = sequelize.define('Likes', {
    userId: DataTypes.INTEGER,
    spotId: DataTypes.INTEGER,
    isLiked: DataTypes.BOOLEAN
  }, {});
  Likes.associate = function(models) {
    Likes.belongsTo(models.User, {foreignKey: 'userId'})
    Likes.belongsTo(models.Spot, {foreignKey: 'spotId'})
  };
  return Likes;
};
