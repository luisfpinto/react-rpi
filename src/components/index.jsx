var React = require('react')
var ReactDom = require('react-dom')
import {PinOut} from './pinout.jsx'

class Container extends React.Component {

	constructor () {
		super ()

		this.state = {pin : 'none',
					  name : 'none'}
	}

	render () {
		return (
			<div>
				<form className="configuration" onSubmit={this._handleSubmit.bind(this)}>
					<p>Select a Pin from draw</p>
					<input type="text" name="pin" value={this.state.name}/>
					<input type="radio" name="action" value="read"/> Read
					<input type="radio" name="action" value="write"/> Write
					<input type="text" name="value"/>
					<input type="submit"/>
				</form> 
				<PinOut selectPin={this._selectPin.bind(this)}/>
			</div>
		)
	}

	_selectPin (pin, name) {
		this.setState({pin, name})
	} 

	_handleSubmit () {

		var formData = $('form').serializeArray()
		
		var data = {pin: this.state.pin,
								action: formData[1].value,
								value: formData[2].value}

		$.ajax({
  		type: "POST",
  		url: '/',
  		data: data,
  		success: function(data) {
  			console.log('Success')
  		}
		});
	}
}
       
ReactDom.render(<Container />, document.getElementById('container'))