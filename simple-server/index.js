var server = require('http').createServer()
  , url = require('url')
  , express = require('express')
  , app = express()
  , port = 2000;

import { createStore,applyMiddleware } from 'redux';
import ReduxShareServer from 'redux-share-server';


var reducer = function(state, action) { return state;};

//create the store.
var store = createStore(reducer, {default:"default"} );

//start the sockets etc.
var shareServer = new ReduxShareServer(store,server,{
	debug:true,
	repeaterMode:true
});

//bind redux server and express
app.use('/redux',shareServer.getExpressMiddleware());

//bind http and express
server.on('request', app);

server.listen(port, function () { 
	console.log('GET http://localhost:'+server.address().port+'/redux/state to view the state');
	console.log('POST http://localhost:'+server.address().port+'/redux/action to post an action to all clients');
});
