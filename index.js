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

	var action = req.body.action
	var pin = req.body.pin
	var value = 0 
	
	//Control variables
	var setup = false
	var prevPin = 0 
	//If pin has been already set up we mustn't do that again. 
	if(prevPin != pin) {
		setup = false
		prevPin = pin
	}

	if(req.body.value === 'true' || req.body.value === 'on') value = 1

	if(action === 'read') {
		if(!setup) {
			gpio.setup(pin, gpio.DIR_IN, helper.readInput.bind(this, pin));
			setup = true
		}
		else helper.readInput(pin)
	}

	if(action === 'write') {
		if(!setup) {
			gpio.setup(pin, gpio.DIR_OUT, helper.write.bind(this, pin, value));
			setup = true
		}
		else helper.write(pin, value)
	}
})