var express = require("express");
var multer = require("multer");
var port = process.env.PORT;
var app = express();

app.set('view engine', 'pug');
var upload = multer({ dest: './uploads/'});

app.get('/', function(req,res) {
   res.render('index');
});

app.post('/', upload.single('upl'), function(req,res) {
    var output = {};
    output.size = req.file.size + ' bytes';
    res.end(JSON.stringify(output));
});

app.listen(port);