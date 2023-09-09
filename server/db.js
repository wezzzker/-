const Sequelize = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        charset:'utf8',
        collate:'utf8_general_ci',
       
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        
    }
);


// var db = {};
// // db.sequelize=sequelize;
// // db.Sequelize = Sequelize;

// module.exports = db;