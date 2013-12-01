// Generated by CoffeeScript 1.6.3
var fs, http, path, server, url;

http = require('http');

url = require('url');

fs = require('fs');

path = require('path');

server = http.createServer(function(req, res) {
  url = url.parse(req.url, true);
  return fs.readFile(path.join(__dirname, url.pathname), function(error, content) {
    var contentType;
    if (error) {
      console.log("can't find " + url.pathname);
      res.writeHead(204);
      return res.end();
    } else {
      contentType = 'text/html';
      if (url.pathname.substring(url.pathname.length - 2) === 'js') {
        contentType = 'application/javascript';
      }
      if (url.pathname.substring(url.pathname.length - 3) === 'css') {
        contentType = 'text/css';
      }
      res.writeHead(200, {
        'Content-type': contentType
      });
      console.log(url.pathname);
      return res.end(content, 'utf-8');
    }
  });
});

server.listen(3333);

console.log('Server running at http://localhost:3333');
