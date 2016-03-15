import { createStore,applyMiddleware } from 'redux';
import SyncReduxClient from 'redux-share-client';

var reducer = function(state,action) {
      if(action.type==="@@SYNC-CONNECT-SERVER-START") return { state:"initState" };
      else return state;
}

var client = new SyncReduxClient('ws://localhost:2000');

var store = createStore(reducer,applyMiddleware(client.getClientMiddleware()));

store.dispatch({type:"@@SYNC-CONNECT-SERVER-START"});
