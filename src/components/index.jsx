var React = require('react')
var ReactDom = require('react-dom')
import {PinOut} from './pinout.jsx'

class Container extends React.Component {

	render () {
		return (
			<div>
				<p>Pin Selected: {this.pin}</p>
				<PinOut selectPin={this._selectPin.bind(this)}/>
			</div>
		)
	}

	_selectPin (pin) {
		this.pin = pin;
		console.log(this.pin)
	} 
}
       
ReactDom.render(<Container />, document.getElementById('container'))