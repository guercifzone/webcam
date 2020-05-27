const http = require('http');
const fs = require('fs');
//const opn = require('opn');
const hostname = '127.0.0.1';
const port = 8081;

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    const server = http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port, hostname, () => {
        // Console
       // opn('http://${hostname}:${port}/');
	  	console.log(`Server running at http://${hostname}:${port}/`);
    });
    
});