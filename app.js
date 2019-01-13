////
// Module

// // Build-in Module
// const http = require('http');

// // Own Module
// const dataTime = require('./ownModules/dataTime.js');

// console.log(`Learn module: ${dataTime()}`);

////
// HTTP Module

// const http = require('http');
// http.createServer((req, res) => {
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.write('Hello World');
// 	res.write('</br>');
// 	res.write(`${req.url}`);
// 	res.end();
// }).listen(8080);

////
// File System

const fs = require('fs');

// Create and add/replace new file
fs.appendFile('./files/fileSystem/createByappendFile.txt', "Hello I'm appendingFile", (err)=>{
	if (err) throw err;
	console.log('Created by appendFile()');
});

fs.writeFile('./files/fileSystem/createBywriteFile.txt', "Hello I'm writingFle", (err)=>{
	if (err) throw err;
	console.log('Created by writeFile()');
});

//Create empty file
fs.open('./files/fileSystem/createByopen.txt', 'w', (err, file) => {
	if (err) throw err;
	console.log('Created by open()');
});

// Delete file
fs.unlink('./files/fileSystem/createByopen.txt', (err) =>{
	if(err) throw err;
	console.log('File deleted');
});

fs.rename('./files/fileSystem/createBywriteFile.txt', './files/fileSystem/createwriteFile.txt', (err) => {
	if(err) throw err;
	console.log('File renamed');
});
////
