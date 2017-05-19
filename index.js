    var http = require( "http" ),
        terminal = require( "web-terminal" );
    var app = http.createServer( function( req, res ) {
        res.writeHead( 200, { "Content-Type": "text/plain" } );
        res.end( "Hello World\n" );
        console.log( req );
    } );
    app.listen( 1337 );
    console.log( "Server running at http://127.0.0.1:1337/" );
    terminal( app );
    console.log( "Web-terminal accessible at http://127.0.0.1:1337/terminal" );
/*
var express = require('express');
var fs = require('fs');
var scriptContent;
fs.readFile('./script.js', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    scriptContent = data;
});
var app = express();

app.listen(1337, function() {
    console.log('Example app listening on port 1337!')
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    res.send(scriptContent);
});

app.post('/', function(req, res, next) {
    // Handle the post for this route
});
*/
