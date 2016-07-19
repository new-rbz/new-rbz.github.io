var server = require('http').createServer();
var url = require('url')
var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ server: server })
var websocketPort = 4080;
var httpPort = 3002;

var express = require('express');
var jwt = require('express-jwt');
var cors = require('cors');
var quotes = require('./quotes.json');
var auth0Settings = require('./auth0.json');
var app = express();
app.use(cors()),
    CLIENTS=[];

var jwtCheck = jwt({
  secret: new Buffer(auth0Settings.secret, 'base64'),
  audience: auth0Settings.audience
});

app.use('/api/quote', jwtCheck);

app.get('/api/quote',  (req, res) => {
  var rand = Math.floor(Math.random() * quotes.length);
  res.json(quotes[rand]);
});

app.listen(httpPort, () => {
  console.log('Backend listening on port 3002!');
});

//
app.use(function (req, res) {
  res.send({ msg: "hello" });
});

wss.on('connection', function connection(ws) {
  var location = url.parse(ws.upgradeReq.url, true);
  // you might use location.query.access_token to authenticate or share sessions
  // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  try { 
    ws.send('something', function ack(error) {
      console.error(error);
    });
  }
  catch (e) {
    console.error(e); 
  }

  CLIENTS.push(ws);
  ws.on('message', function(message) {
      console.log('received: %s', message);
      sendAll(message);
  });
  ws.send("NEW USER JOINED");
});

function sendAll (message) {
  for (var i=0; i<CLIENTS.length; i++) {
    CLIENTS[i].send("Message: " + message);
  }
}

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(data);
  });
};

server.on('request', app);
server.listen(websocketPort, function () { console.log('Listening on ' + server.address().port) });