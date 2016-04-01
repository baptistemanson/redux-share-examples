var server = require('http').createServer()
  , url = require('url')
  , express = require('express')
  , app = express()
  , port = 2000;

import { createStore,applyMiddleware } from 'redux';
import ReduxShareServer from 'redux-share-server';


var reducer = function(state, action) { return state;};

//start the sockets etc.
var shareServer = new ReduxShareServer(server,{
	debug:true,
	broadcastMode:true
});

//create the store.
var store = createStore(reducer, {default:"default"},applyMiddleware( shareServer.getReduxMiddleware()));



//bind redux server and express
app.use('/redux',shareServer.getExpressMiddleware());

//bind http and express
server.on('request', app);

store.dispatch({type:"@@SERVER-LISTEN-START"});

server.listen(port, function () { 
	console.log('GET http://localhost:'+server.address().port+'/redux/state to view the state');
	console.log('POST http://localhost:'+server.address().port+'/redux/action to post an action to all clients');
	console.log('curl -H "Content-Type: application/json" -X POST -d \'{"type":"my-action"}\'  http://localhost:'+server.address().port+'/redux/action');
});
