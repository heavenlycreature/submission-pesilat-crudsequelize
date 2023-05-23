const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
    'belajarmysql',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = (sequelize, Sequelize) => {
    const model = sequelize.define('biodata',
        {
            nama: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tempatLahir: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tanggalLahir: {
                type: DataTypes.DATEONLY,
                allowNull: false
            },
            alamat: {
                type: DataTypes.STRING
            }
        }, {
        freezeTableName: true
    })
    return model;
}
sequelize.authenticate()
    .then(() => console.log(`Database terkoneksi!`))
    .catch(err => console.log(`Database tidak terkoneksi ${err}`))
sequelize.sync()
    .then(() => console.log('Table was created!'))
    .catch(err => console.log(`can't create table! ${err}`))
