module.exports = (sequelize, DataTypes) => {
    let alias = "Usuario";
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false,
    }

    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}