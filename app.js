var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res) {
  var uri = url.parse(req.url);
  switch (uri.pathname) {
    case '/':
      fs
        .createReadStream(`${__dirname}/index.html`)
        .pipe(res);
      break;

    case '/api':
      res.writeHead(200, {'Content-Type': 'application/json'});
      var obj = {
        "fname": "John",
        "lname": "Southworth"
      };
      res.end(JSON.stringify(obj));
      break;
    default:
      res.writeHead(404);
      res.end();
  }
}).listen(8080, '127.0.0.1');
