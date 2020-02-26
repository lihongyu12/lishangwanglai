import React from 'react';
import '../App.css';
class Li extends React.Component {

	render() {
		return (
			<div className="Li">
						<div><span>{this.props.x1}:{this.props.typename}</span><span className="money" style={{fontSize:this.props.size}}>{this.props.money}</span></div>
						<div><span>{this.props.x2}:{this.props.name}</span><span className="time">{this.props.x3}:{this.props.time}</span></div>
					</div>
		)
	}
}
export default Li