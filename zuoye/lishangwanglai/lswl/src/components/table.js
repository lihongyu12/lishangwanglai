import React from 'react';
import '../App.css';
class Table extends React.Component {

	render() {
		return (
			<div className="tables">
						<span style={{flex:'0.1'}}>{this.props.txt1}</span>
						<span style={{flex:'0.3'}}>{this.props.txt2}</span>
						<span style={{flex:'0.25'}}>{this.props.txt3}</span>
						<span style={{flex:'0.25'}}>{this.props.txt4}</span>
					</div>
		)
	}
}
export default Table