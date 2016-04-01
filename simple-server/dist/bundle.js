/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _redux = __webpack_require__(1);
	
	var _reduxShareServer = __webpack_require__(2);
	
	var _reduxShareServer2 = _interopRequireDefault(_reduxShareServer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var server = __webpack_require__(3).createServer(),
	    url = __webpack_require__(4),
	    express = __webpack_require__(5),
	    app = express(),
	    port = 2000;
	
	var reducer = function reducer(state, action) {
		return state;
	};
	
	//start the sockets etc.
	var shareServer = new _reduxShareServer2.default(server, {
		debug: true,
		broadcastMode: true
	});
	
	//create the store.
	var store = (0, _redux.createStore)(reducer, { default: "default" }, (0, _redux.applyMiddleware)(shareServer.getReduxMiddleware()));
	
	//bind redux server and express
	app.use('/redux', shareServer.getExpressMiddleware());
	
	//bind http and express
	server.on('request', app);
	
	store.dispatch({ type: "@@SERVER-LISTEN-START" });
	
	server.listen(port, function () {
		console.log('GET http://localhost:' + server.address().port + '/redux/state to view the state');
		console.log('POST http://localhost:' + server.address().port + '/redux/action to post an action to all clients');
		console.log('curl -H "Content-Type: application/json" -X POST -d \'{"type":"my-action"}\'  http://localhost:' + server.address().port + '/redux/action');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("redux-share-server");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("http");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map