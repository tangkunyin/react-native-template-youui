var http = require('http');
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  response.write(JSON.stringify({ 
    code: 0,
    data: {
        text: 'Hello World',
        timestamp: new Date().getTime()
    }   
  }));
  console.log(request.url); 
  response.end();
});
server.listen(9009);
console.log('Api test server is running at http://127.0.0.1:9009/');
