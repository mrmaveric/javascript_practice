var fs = require('fs');

fs.readFile('files/about-nodejs.txt',function(err,data){
	console.log('data: ' +data);
});