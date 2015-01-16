var express = require('express');
var bodyParser = require('body-parser');

var obj = function JSONService(callback, port) {
    var app = express();
    app.post('/', bodyParser.json(), function (req, res) {
        callback(req.body, function (err, respText) {
            if(err) {
                res.writeHead(400, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({error: err}));
            }
            else  {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({result: respText}));
            }
        })
    });
    app.listen(port);
    console.log("Service started");
};

module.exports = obj;