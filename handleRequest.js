require('./JSONService')(function (req, callback) {
    if(!req.name) callback("No name!");
    else callback(null, {result: "Hello " + req.name});
}, 3000);

