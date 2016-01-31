//Modulos principais
var express = require('express')
  , logger = require('morgan')
  , methodOverride = require('method-override')
  , bodyParser = require('body-parser')
  , errorHandler = require('errorhandler')
  , app = express()
  , cors = require('cors')
  , db = require('./config/db.js')();

  // allow CORS
  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
      res.status(200).end();
    } else {
      next();
    }
  });

// variaveis e middlewares do servidor
app.use(express.static(__dirname + '/public'));
app.set('port', process.env.PORT || 4000);
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors);

// rotas da api server
require('./route/api')(app);
require('./route/find')(app);
require('./route/create')(app);
require('./route/remove')(app);
require('./route/update')(app);


// error handling middleware should be loaded after the loading the routes
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

//rodar o server
app.listen(app.get('port'), function(){
  console.log('A Treta acontece na porta: ' + app.get('port'));
});
