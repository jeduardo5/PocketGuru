var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


mongoose.connect('mongodb://user123:password@ds063946.mlab.com:63946/button')

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

var buttons = mongoose.model('Button', {
	text: String
});

app.get('/api/buttons', function(req, res) {
	buttons.find(function(err, buttons) {
		if (err)
			res.send(err)

		res.json(buttons);
	});
});

app.post('/api/buttons', function(req, res) {

	buttons.create({
		text: req.body.text,
		done: false
	}, function(err, button) {
		if (err)
			res.send(err);

		Button.find(function(err, buttons) {
			if (err)
				res.send(err)

			res.json(buttons);
		});

	});
});

app.delete('/api/buttons/: button_id', function(req, res) {
	Buttons.delete({ 
		_id: req.params.button_id
	}, function(err, button) {
		if (err)
			res.send(err);

		buttons.find(function(err, buttons) {
			if(err)
				res.send(err)

			res.json(buttons);
		});
	});
});
    // listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
