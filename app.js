
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes/web')
  , users = require('./routes/api/users')
  , projects = require('./routes/api/projects')
  , topics = require('./routes/api/topics')
  , pins = require('./routes/api/pins')
  , annotations = require('./routes/api/annotations')
  , http = require('http')
  , path = require('path');

// read environment
var isProd = process.argv.indexOf('-prod') >= 0;
if(isProd) { 
  process.env.PORT = 5000;
}

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
app.get('/api/users', users.list);

app.get('/api/projects', projects.list);
app.get('/api/activities', projects.activity);

app.get('/api/topics', topics.list);
app.post('/api/topics', topics.create);

app.get('/api/pins', pins.list);
app.post('/api/pins', pins.create);

app.get('/api/annotations', annotations.list);
app.post('/api/annotations', annotations.create);
app.post('/api/comments', annotations.addComment);

// start server
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});