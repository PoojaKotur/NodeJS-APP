var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hi Myself Pooja Kotur'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
