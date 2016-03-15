var server = require('http').createServer()
  , url = require('url')
  , express = require('express')
  , app = express()
  , port = 2000;

import { createStore,applyMiddleware } from 'redux';
import reduxShareServer from 'redux-share-server';


var reducer = function(state, action) { return state;};

//create the store.
var store = createStore(reducer, {default:"default"} );

//start the sockets etc.
var syncReduxServer = reduxShareServer(store,server);

//bind redux server and express
app.use('/redux',syncReduxServer.getMiddleware());

//bind http and express
server.on('request', app);

server.listen(port, function () { console.log('Listening on ' + server.address().port) });
