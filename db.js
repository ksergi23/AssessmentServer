const Sequelize = require ('sequelize');

const sequelize = new Sequelize ('lumavate','postgres','password',{
    host: 'localhost',
    dialect: 'postgres' 
});

sequelize.authenticate().then(
    function(){
        console.log('Connected to lumavate postgres database');

    },
    function(err){
        console.log(err)
    }
);

module.exports=sequelize;