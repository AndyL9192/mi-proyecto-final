
const { DataTypes, Sequelize } = require('../models/database.js');

const PublicacionSchema = sequelize.define('Publicaciones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    url_imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    }

    tableName: 'publicaciones',
    timestamps: false

    
});

module.exports = PublicacionSchema;