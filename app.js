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

// const fs = require('fs');

// // Create and add/replace new file
// fs.appendFile('./files/fileSystem/createByappendFile.txt', "Hello I'm appendingFile", (err)=>{
// 	if (err) throw err;
// 	console.log('Created by appendFile()');
// });

// fs.writeFile('./files/fileSystem/createBywriteFile.txt', "Hello I'm writingFle", (err)=>{
// 	if (err) throw err;
// 	console.log('Created by writeFile()');
// });

// //Create empty file
// fs.open('./files/fileSystem/createByopen.txt', 'w', (err, file) => {
// 	if (err) throw err;
// 	console.log('Created by open()');
// });

// // Delete file
// fs.unlink('./files/fileSystem/createByopen.txt', (err) =>{
// 	if(err) throw err;
// 	console.log('File deleted');
// });

// fs.rename('./files/fileSystem/createBywriteFile.txt', './files/fileSystem/createwriteFile.txt', (err) => {
// 	if(err) throw err;
// 	console.log('File renamed');
// });

////
// URL Module

// const url = require('url');

// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q);

////
// MySQL Module
// npm install --save mysql

const mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "mydb"
});

con.connect((err) => {
	if(err) throw err;
	console.log("Connected");
	// var sql = "INSERT INTO customers (firstName, lastName) VALUES ?";
	// var values = [
	//     ['John', 'Richard'],
	// 	['Peter', 'Wood'],
	// ];
	// con.query(sql, [values], function (err, result) {
	// 	if (err) throw err;
	// 	console.log("Number of records inserted: " + result.affectedRows);
	// });

	var sql = "SELECT * FROM customers";
	con.query(sql , function (err, result, fields) {
		if (err) throw err;
		console.log(result);
	});
});

////