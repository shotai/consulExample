var express = require('express');
var app = express();
var http = require('http');
// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger());

var httpListener = http.createServer(app);
app.get('/', function(req, res) {
  console.log("get!");
  res.send('hello world');
});

httpListener.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
