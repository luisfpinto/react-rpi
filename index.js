var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//I|O GPIO
var gpio = require('rpi-gpio');
var helper = require('./src/helper') 

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('public'))

var server = app.listen(8000, function(){
	console.log('Server started on port 8000')	
})

app.post('/', function (req, res) {

	console.log(req.body)

	var action = req.body.action
	var pin = req.body.pin

	if(action === 'read') {
		gpio.setup(pin, gpio.DIR_IN, helper.readInput(pin));
	}

	if(action === 'write') {
		gpio.setup(pin, gpio.DIR_OUT, helper.write(pin));

	}
})