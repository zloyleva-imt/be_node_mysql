'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    roles: DataTypes.STRING,
  }, {
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      }
    }
  });
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};