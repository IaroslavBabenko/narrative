var express = require('express');
var fs = require('fs');

var outfile = "index.html";
var text = fs.readFileSync(outfile);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(text.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
