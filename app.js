var express = require('express'); 
var app = express(); 
let list = require('./controllers/listcontroller')
let sequelize = require('./db');
let bodyParser = require('body-parser'); 

sequelize.sync();

app.use(bodyParser.json()); 

app.use(require('./middleware/headers'));

app.use('/disney', list)


app.listen(3000, function(){
    console.log('App is listening on 3000.') 
});
