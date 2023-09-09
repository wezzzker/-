const db = require('../db')
const Publishers = require('./publishers_Model')
const {DataTypes} = require('sequelize');

const TabletopGames = db.define('tabletop_games',{
    game_id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true },
    game_name:{type:DataTypes.STRING(100), allowNull:false},

},{timestamps: false})


TabletopGames.belongsTo(Publishers, {
    foreignKey: { name: 'fk_publ_id', allowNull: true },
    onDelete: 'CASCADE',
  })

module.exports = TabletopGames