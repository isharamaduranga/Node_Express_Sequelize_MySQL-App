const dbConfig = require('../config/dbConfig')

const {Sequelize, DataTypes} = require('sequelize')

let sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle
        }
    }
);

sequelize.authenticate()
    .then(()=>{
        console.log('connected..')
}).catch(error =>{
    console.log('Error : '+ error)
})

const db = {}
db.Sequelize = sequelize
db.sequelize =sequelize

db.products = require('./productModel')(sequelize,DataTypes)
db.reviews = require('./reviewModel.js')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('yes re-sync done!')
})

module.exports = db