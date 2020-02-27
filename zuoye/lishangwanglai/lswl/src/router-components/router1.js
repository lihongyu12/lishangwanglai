import React from 'react';
import '../App.css';
import Types from '../components/types'
import Li from '../components/li'
import Select from '../components/select'
import Option from '../components/option'
import {
	connect
} from 'react-redux'

class Router1 extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div>
			<div>
				<Types txt1="收礼" txt2="送礼"/>
				<Select defaultValue="全部" Width="33.333%">
					<Option value="全部">全部</Option>
					<Option value="结婚收礼">结婚收礼</Option>
					<Option value="搬家收礼">搬家收礼</Option>
					<Option value="诞辰收礼">诞辰收礼</Option>
					<Option value="满月收礼">满月收礼</Option>
					<Option value="寿宴收礼">寿宴收礼</Option>
					<Option value="升学收礼">升学收礼</Option>
					<Option value="白事收礼">白事收礼</Option>
				</Select>
				<Select defaultValue="时间" Width="33.333%">
					<Option value="111">{111}</Option>
				</Select>
				<Select defaultValue="金额" Width="33.333%">
					<Option value="111">{111}</Option>
				</Select>
				<div>
					{
			this.props.todos.arr1s.map((item, index) => {
						if (item.type == this.props.todos.infos) {
							return <Li key={index} x1="类目名称" x2="姓名" x3="时间" typename={item.typename} size="1.5rem" name={item.name} money={item.money} time={item.time}/>
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
export default connect(mapStateToProps)(Router1);