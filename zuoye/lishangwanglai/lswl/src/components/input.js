import React from 'react';
import '../App.css';
import Types from './types'
import store from '../store'
import Select from './select'
import Option from './option'
import {
	connect
} from 'react-redux'
class Inputer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: '收礼',
			arr: [],
			show: false,
			Option: ''
		}
		this.onSetx = this.onSetx.bind(this)
		this.add = this.add.bind(this)
		this.getInfo = this.getInfo.bind(this)
		this.setShow = this.setShow.bind(this)
		this.getOption = this.getOption.bind(this)
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
			type: this.state.info,
			type2: this.state.Option,
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
	getInfo(comment) {
		this.setState({
			info: comment
		});
	}
	getOption(comment) {
		this.setState({
			Option: comment
		});
	}
	setShow() {
		this.setState({
			show: true
		})
	}
	render() {
		return (
			<div>
			<Types txt1="收礼" txt2="送礼" getInfo={this.getInfo}/>
			<div className="inputs">
				<div>
					<span>金额：</span><span>￥{}</span>
				</div>
					<div><textarea name="" id="" cols="30" rows="10" placeholder="请输入备注信息，最多可输入100字。如“孩子满月，请亲戚吃饭，共收礼8000元”。" ref={this.myInput2}></textarea></div>
					<div><span>{'时间:'}</span><input type="text" className="inputs" ref={this.myInput3}/></div>
					<div></div>
					
				</div>
				<div>
					<Select defaultValue="选择收礼类型" Width="100%" getOption={this.getOption}>
						<Option value="结婚收礼">结婚收礼</Option>
						<Option value="搬家收礼">搬家收礼</Option>
						<Option value="诞辰收礼">诞辰收礼</Option>
						<Option value="满月收礼">满月收礼</Option>
						<Option value="寿宴收礼">寿宴收礼</Option>
						<Option value="升学收礼">升学收礼</Option>
						<Option value="白事收礼">白事收礼</Option>
					</Select>
				</div>
				<div onClick={this.setShow}>添加送礼人</div>
				{
				this.state.show&&<div className="songNews">
					<div className="songHeader"><span>取消</span> <span>送礼人信息</span><span>完成</span></div>
					<div className="songGx">
						收礼人关系：<span><label><input type="radio" name="radios"/>亲属</label></span>
								<span><label><input type="radio" name="radios"/>朋友</label></span>
								<span><label><input type="radio" name="radios"/>同学</label></span>
								<span><label><input type="radio" name="radios"/>同事</label></span>
					</div>
					<div><span>{'送礼人:'}</span><input type="text" className="inputs" ref={this.myInput4}/></div>
					<div><input type="text" ref={this.myInput1}/></div>
				</div>}
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