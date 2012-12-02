
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/web')
  , user = require('./routes/api/user')
  , project = require('./routes/api/project')
  , topic = require('./routes/api/topic')
  , http = require('http')
  , path = require('path');

// read environment

// app configuration
var app = express();
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ 
    secret: 'pqlFNkq74RGxmjfJYIhwmw==',
    cookie: { maxAge: 3600000 }
  }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});
app.configure('development', function(){
  app.use(express.errorHandler());
});

// web routes
app.get('/', routes.index);
app.get('/login', routes.login);
app.post('/login', routes.loginPost);
app.get('/logout', routes.logout);

// api routes
app.get('/api/users', user.list);
app.get('/api/projects', project.list);
app.get('/api/activities', project.activity);
app.get('/api/topics', topic.list);

// start server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});