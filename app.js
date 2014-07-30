var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/numbers', function(req, res) {
	res.send([
		Math.floor(Math.random()*100),
		Math.floor(Math.random()*100),
		Math.floor(Math.random()*100),
		Math.floor(Math.random()*100),
		Math.floor(Math.random()*100)
		])
})

var array = []
var total = 0
app.post('/numbers', function(req, res) {
	console.log("req.body:", req.body)
	array.push(req.body)

	total += parseInt(req.body.n)
	console.log("array:", array)
	console.log("total:", total)
	res.send(200, total)
})

var server = app.listen(3597, function() {
	console.log('Express server listening on port ' + server.address().port);
});
