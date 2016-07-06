var gpio = require('rpi-gpio');

var helper = module.exports = {}


helper.readInput = function (pin) {
	console.log('Reading')
    gpio.read(pin, function(err, value) {
        console.log('The value is ' + value);
    });
}

helper.write = function (pin, value) {
	console.log('Writing')
	console.log('Pin: ', pin)
	console.log('Value: ', value)
    gpio.write(pin, value, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}