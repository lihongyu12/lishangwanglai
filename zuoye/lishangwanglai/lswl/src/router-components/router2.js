import React from 'react';
import '../App.css';
import Types from '../components/types'
import Li from '../components/li'
import Select from '../components/select'
import Option from '../components/option'
import {
	connect
} from 'react-redux'
class Router2 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: '待参加',
			Option: '全部'
		}
		this.getOption = this.getOption.bind(this)
		this.getInfo = this.getInfo.bind(this)
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
	render() {
		return (
			<div>
			<div style={{background:'#ccc'}}>
					<Types txt1="待参加" txt2="已参加" getInfo={this.getInfo} isShow={true} link={'/jia2'}/>
					<div style={{margin:'0.5rem 0px'}}>
					<Select defaultValue="全部" Width="50%" getOption={this.getOption}>
						<Option value="全部">全部</Option>
						<Option value="结婚收礼">结婚收礼</Option>
						<Option value="搬家收礼">搬家收礼</Option>
						<Option value="诞辰收礼">诞辰收礼</Option>
						<Option value="满月收礼">满月收礼</Option>
						<Option value="寿宴收礼">寿宴收礼</Option>
						<Option value="升学收礼">升学收礼</Option>
						<Option value="白事收礼">白事收礼</Option>
					</Select>
					<Select defaultValue="时间" Width="50%">
							<Option value="111">{111}</Option>
					</Select>
					</div>
					
					<div>
			{
			this.props.todos.arr2s.map((item, index) => {
						 if (item.type == this.state.info) {
						 	if (this.state.Option && item.type2 == this.state.Option) {
						return <Li key={index} x1="事件名" x2="地点" x3="时间" typename={item.typename} size="0.5rem" name={item.where} money={item.type} time={item.time}/>
							}else if(this.state.Option=='全部'){
								if (item.type == this.state.info){
									return <Li key={index} x1="事件名" x2="地点" x3="时间" typename={item.typename} size="0.5rem" name={item.where} money={item.type} time={item.time}/>
								}
							}
								}
							})
					}
						
					</div>
				</div>
		</div>
		)
	}
}
var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(Router2);