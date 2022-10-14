require('dotenv').config();

//import the Sequelize constructor from the library
const Sequelize = require('sequelize');

let sequelize;

//create connection to the database and JAWSDB for Heroku
if(process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    sequelize = new Sequelize(
        process.env.MYSQL_DB, 
        process.env.MYSQL_USER, 
        process.env.MYSQL_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql', 
            port: 3306
        }
    );
}


module.exports = sequelize;