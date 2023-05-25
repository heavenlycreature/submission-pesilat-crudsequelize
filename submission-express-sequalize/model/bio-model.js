const Sequelize = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const bio = sequelize.define('biodata',
        {
            nama: {
                type: Sequelize.STRING,
                allowNull: false
            },
            tempatLahir: {
                type: Sequelize.STRING,
                allowNull: false
            },
            tanggalLahir: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },
            alamat: {
                type: Sequelize.STRING
            }
        })
    return bio;
}