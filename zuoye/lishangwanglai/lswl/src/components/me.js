import React from 'react';
import '../App.css';

class Me extends React.Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className="me" ><span><img style={{width:this.props.imgwidth,lineHeight:this.props.lingh}} src={this.props.img} /></span><span style={{lineHeight:this.props.lingh}} className="txt" style={{lineHeight:this.props.lingh}}>{this.props.text}</span><span className="jiant" style={{lineHeight:this.props.lingh}}>{'>'}</span></div>
		)
	}
}
export default Me