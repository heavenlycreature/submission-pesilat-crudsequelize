const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'biodata_db',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);
const model = {};

model.Sequelize = Sequelize;
model.sequelize = sequelize;
model.bio = require('./bio-model.js')(sequelize, Sequelize);
module.exports = model;