let express = require('express');
const {sequelize} = require('./models')

const config = require('./config/config')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./routes')(app)

app.get('/status', function(req,res){
    res.send('Hello nodejs server');
})

app.get('/hello/:person', function(req,res){
    console.log('hello -'+req.params.person);
    res.send('say hello with ' + req.params.person);
})

app.post('/hello', function(req,res){
    res.send('OK you post - ' + req.body.name)
})

let port = process.env.POST || config.port;
sequelize.sync({force: false}).then(() =>{
    app.listen(port, function(){
        console.log('server running on ' + port);
    })
})
