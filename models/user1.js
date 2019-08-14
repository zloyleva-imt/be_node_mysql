const Sequelize = require('sequelize');
const Model = Sequelize.Model;

module.exports = (sequelize, DataType) => {

    class User extends Model {}
    User.init({
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
              is: /[A-Za-Z0-9]{3,}/i
          }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
      }, {
        sequelize,
        modelName: 'user',
        timestamps: true
      });

    return User;
}