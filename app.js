////
// Module

// Build-in Module
const http = require('http');

// Own Module
const dataTime = require('./ownModules/dataTime.js');

console.log(`Learn module: ${dataTime()}`);

////
// HTTP Module

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World');
	res.write('</br>');
	res.write(`${req.url}`);
	res.end();
}).listen(8080);

////
