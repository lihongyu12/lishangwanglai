import React from 'react';
import '../App.css';
import Types from './types'
import store from '../store'
import {
	connect
} from 'react-redux'
class Inputer extends React.Component {
	constructor(props) {
		super(props);
		this.onSetx = this.onSetx.bind(this)
		this.add = this.add.bind(this)
		this.myInput1 = React.createRef()
		this.myInput2 = React.createRef()
		this.myInput3 = React.createRef()
		this.myInput4 = React.createRef()
	}
	onSetx() {
		if (this.props.shou - this.props.song > 0) {
			return true
		} else {
			return false
		}
	}
	add() {
		this.props.dispatch({
			type: 'shou',
			type2: '',
			money: this.myInput1.current.value,
			text: this.myInput2.current.value,
			time: this.myInput3.current.value,
			name: this.myInput4.current.value
		})
		this.myInput1.current.value = ''
		this.myInput2.current.value = ''
		this.myInput3.current.value = ''
		this.myInput4.current.value = ''
	}
	render() {
		return (
			<div>
			<Types txt1="收礼" txt2="送礼"/>
			<div className="inputs">
				<div>
					<span>{'金额:'}</span>￥<input type="text" ref={this.myInput1}/>
				</div>
					<div><textarea name="" id="" cols="30" rows="10" placeholder="请输入备注信息，最多可输入100字。如“孩子满月，请亲戚吃饭，共收礼8000元”。" ref={this.myInput2}></textarea></div>
					<div><span>{'时间:'}</span><input type="text" className="inputs" ref={this.myInput3}/></div>
					<div></div>
					<div><span>{'送礼人:'}</span><input type="text" className="inputs" ref={this.myInput4}/></div>
				</div>
				<div className="tijiao">
					<button onClick={()=>{this.add()}}>提交</button>
				</div>
				</div>)
	}
}

var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(Inputer);