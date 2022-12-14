require('dotenv').config();

const Sequelize = require('sequelize');
let sequelize;

//creates the jawsdb connection and protects your info with dotenv
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        });
}

module.exports = sequelize;

