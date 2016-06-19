var React = require('react')
var ReactDom = require('react-dom')

export class PinOut extends React.Component {

	render () {

		return(
			<table className = "pinout">
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,'3.3')}>3.3V Supply</td>
					<td><div className="v33_outer"><div className="v33_inner"></div></div></td>
					<td><div className="dc_outer"><div className="dc_inner"></div></div></td>
					<td className="name">5V Supply</td>
				</tr>
				<tr>
					<td className="name">GPIO02</td>
					<td><div className="i2c_outer"><div className="i2c_inner"></div></div></td>
					<td><div className="dc_outer"><div className="dc_inner"></div></div></td>
					<td className="name">5V</td>
				</tr>
				<tr>
					<td className="name">GPIO03</td>
					<td><div className="i2c_outer"><div className="i2c_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name">Ground</td>
				</tr>
				<tr>
					<td className="name">GPIO04</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="trd_outer"><div className="trd_inner"></div></div></td>
					<td className="name">GPIO14</td>
				</tr>
				<tr>
					<td className="name">Ground</td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td><div className="trd_outer"><div className="trd_inner"></div></div></td>
					<td className="name">GPIO15</td>
				</tr>
				<tr>
					<td className="name">GPIO17</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">#GPIO18</td>
				</tr>
				<tr>
					<td className="name">GPIO27</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name">Ground</td>
				</tr>
				<tr>
					<td className="name">GPIO22</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">GPIO23</td>
				</tr>
				<tr>
					<td className="name">3.3V Supply</td>
					<td><div className="v33_outer"><div className="v33_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">GPIO24</td>
				</tr>
				<tr>
					<td className="name">GPIO10</td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name">Ground</td>
				</tr>
				<tr>
					<td className="name">GPIO09</td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">GPIO25</td>
				</tr>
				<tr>
					<td className="name">GPIO11</td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td className="name">GPIO08</td>
				</tr>
				<tr>
					<td className="name">Ground</td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td className="name">GPIO07</td>
				</tr>
				<tr>
					<td className="name">ID_SD(i2c)</td>
					<td><div className="e2_outer"><div className="e2_inner"></div></div></td>
					<td><div className="e2_outer"><div className="e2_inner"></div></div></td>
					<td className="name">ID_SD(i2c)</td>
				</tr>
				<tr>
					<td className="name">GPIO05</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name">Ground</td>
				</tr>
				<tr>
					<td className="name">GPIO06</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">GPIO12</td>
				</tr>
				<tr>
					<td className="name">GPIO13</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name">Ground</td>
				</tr>	
				<tr>
					<td className="name">GPIO19</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">GPIO16</td>
				</tr>
				<tr>
					<td className="name">GPIO26</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">GPIO20</td>
				</tr>
				<tr>
					<td className="name">Ground</td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name">GPIO21</td>
				</tr>
			</table>
		)
	}

	_selectGPIO (pin) {
		this.props.selectPin(pin)
	}
}