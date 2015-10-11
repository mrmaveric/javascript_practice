
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');

var http = require('http');
var path = require('path');

var login = require('./routes/login');
var version = require('./routes/version');

var tables = require('./routes/tables');
var companiesTable = require('./routes/companiesTable');
var testsTable = require('./routes/testsTable');
var tagsTable = require('./routes/tagsTable');
var testersTable = require('./routes/testersTable');

var db = require('./models');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/tables', tables.index);

app.get('/tables/company', companiesTable.index);
app.get('/tables/tag', tagsTable.index);
app.get('/tables/test', testsTable.index);
app.get('/tables/tester', testersTable.index);

app.post('/tables/company', companiesTable.post);
app.post('/tables/tag', tagsTable.post);
app.post('/tables/test', testsTable.post);
app.post('/tables/tester', testersTable.post);

app.post('/login', login.post);
app.get('/intaceptVersion', version.index);

db
    .sequelize
    .sync(/*{ force: true }*/)
    .complete(function (err) {
        if (err) {
            throw err[0];
        } else {
            http.createServer(app).listen(app.get('port'), function () {
                console.log('Express server listening on port ' + app.get('port'))
            })
        }
    });

