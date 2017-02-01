// Creates the burgers table using Sequelize.
module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    });
    return Burgers;
};
