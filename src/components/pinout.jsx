var React = require('react')
var ReactDom = require('react-dom')

export class PinOut extends React.Component {

	render () {

		return(
			<table className = "pinout">
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,1,'3.3v')}>3.3V Supply</td>
					<td><div className="v33_outer"><div className="v33_inner"></div></div></td>
					<td><div className="dc_outer"><div className="dc_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,2,'5.5v')}>5V Supply</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,3,'GPIO02')}>GPIO02</td>
					<td><div className="i2c_outer"><div className="i2c_inner"></div></div></td>
					<td><div className="dc_outer"><div className="dc_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,4,'5v')}>5V</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,5,'GPIO03')}>GPIO03</td>
					<td><div className="i2c_outer"><div className="i2c_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,6,'Ground')}>Ground</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,7,'GPIO04')}>GPIO04</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="trd_outer"><div className="trd_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,8,'GPIO14')}>GPIO14</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,9,'Ground')}>Ground</td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td><div className="trd_outer"><div className="trd_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,10,'GPIO15')}>GPIO15</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,11,'GPIO17')}>GPIO17</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,12,'GPIO18')}>GPIO18</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,13,'GPIO27')}>GPIO27</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,14,'Ground')}>Ground</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,15,'GPIO22')}>GPIO22</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,16,'GPIO23')}>GPIO23</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,17,'3.3v')}>3.3V Supply</td>
					<td><div className="v33_outer"><div className="v33_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,18,'GPIO24')}>GPIO24</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,19,'GPIO10')}>GPIO10</td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,20,'Ground')}>Ground</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,21,'GPIO09')}>GPIO09</td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,22,'GPIO25')}>GPIO25</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,23,'GPIO11')}>GPIO11</td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,24,'GPIO08')}>GPIO08</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,25,'Ground')}>Ground</td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td><div className="spi_outer"><div className="spi_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,27,'GPIO07')}>GPIO07</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,28,'ID_SD(i2c)')}>ID_SD(i2c)</td>
					<td><div className="e2_outer"><div className="e2_inner"></div></div></td>
					<td><div className="e2_outer"><div className="e2_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,29,'ID_SD(i2c)')}>ID_SD(i2c)</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,30,'GPIO05')}>GPIO05</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,31,'Ground')}>Ground</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,32,'GPIO06')}>GPIO06</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,33,'GPIO12')}>GPIO12</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,34,'GPIO13')}>GPIO13</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,35,'Ground')}>Ground</td>
				</tr>	
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,36,'GPIO19')}>GPIO19</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,37,'GPIO16')}>GPIO16</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,38,'GPIO26')}>GPIO26</td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,39,'GPIO20')}>GPIO20</td>
				</tr>
				<tr>
					<td className="name" onClick={this._selectGPIO.bind(this,40,'Ground')}>Ground</td>
					<td><div className="ground_outer"><div className="ground_inner"></div></div></td>
					<td><div className="gpio_outer"><div className="gpio_inner"></div></div></td>
					<td className="name" onClick={this._selectGPIO.bind(this,41,'GPIO21')}>GPIO21</td>
				</tr>
			</table>
		)
	}

	_selectGPIO (pin,name) {
		this.props.selectPin(pin,name)
	}
}