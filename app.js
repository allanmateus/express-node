const http = require('http');

http.createServer(function(req, resp) {
  resp.writeHead(200, {'Content-Type': 'text/plain'});
  resp.end('Ola Mundo!\n');
}).listen(8000);

console.log('Server running at http://localhost:8000/');

