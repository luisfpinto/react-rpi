//var gpio = require('rpi-gpio');
var helper = module.exports = {}


helper.readInput = function (pin) {
    gpio.read(pin, function(err, value) {
        console.log('The value is ' + value);
    });
}

helper.write = function (pin, value) {
    gpio.write(pin, value, function(err) {
        if (err) throw err;
        console.log('Written to pin: ', value);
    });
}