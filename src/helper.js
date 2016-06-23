var gpio = require('rpi-gpio');

var helper = module.exports = {}


helper.readInput = function (pin) {
	console.log('Reading')
    gpio.read(pin, function(err, value) {
        console.log('The value is ' + value);
    });
}

helper.write = function (pin) {
	console.log('Writing')
    gpio.write(pin, true, function(err) {
        if (err) throw err;
        console.log('Written to pin');
    });
}