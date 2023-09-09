const db = require('../db')
const {DataTypes} = require('sequelize');

const Pusblishers = db.define('publishers',{
    publ_id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    publ_name:{ type: DataTypes.STRING(100), allowNull:false},
    city:{type:DataTypes.STRING(100), allowNull:false}
},{timestamps: false,}); 

module.exports = Pusblishers