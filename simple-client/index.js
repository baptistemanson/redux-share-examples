import { createStore,applyMiddleware } from 'redux';
import SyncReduxClient from 'redux-share-client';

var reducer = function(state,action) {
      if(action.type==="@@SYNC-CONNECT-SERVER-START") return { state:"initState" };
      else return state;
}

var shouldSend = function(action) {
	return (action.type !== "FILTERED");
};

var client = new SyncReduxClient('ws://localhost:2000',
{
	debug:true,
	shouldSend:shouldSend,
	autoReconnectMaxTries:10, 
	autoReconnectDelay:100
});

var store = createStore(reducer,applyMiddleware(client.getReduxMiddleware()));

// This action starts the connection to the server. 
// Upon success another action @@SYNC-CONNECT-SERVER-SUCCESS will be dispatched to the server, with the full state in parameter.
store.dispatch({type:"@@SYNC-CONNECT-SERVER-START"});

window.store = store;

/* 

//A simple action is dispatched to the server.
store.dispatch({type:"PING"});

// Another action that will be not dispatched to the server, as the result of shouldSend(action) is false.
 store.dispatch({type:"FILTERED"});

*/
