const Sequelize = require('sequelize')
const sequelize = new Sequelize({
    database : 'hm_shared',
    username : 'postgres',
    password : 'postgres',
    port : 5432,
    host : 'localhost',
    dialect :'postgres'
})
sequelize.sync().then(function(){
    console.log("PG DB connection stablished")
}),function(err){
    console.log("Not able to connect with database.")
    console.log(err)
}
module.exports = sequelize;