module.exports={
    HOST:'localhost',
    USER:'root',
    PASSWORD:'',
    DB:'node_sequelize_api_db',
    dialect:'mysql',

    //optional (not important to define but its value od full details for that)
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    }
}