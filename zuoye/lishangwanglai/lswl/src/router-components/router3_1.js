import React from 'react';
import '../App.css';
import Set from '../components/set_component'
import Me from '../components/me'
import {
	connect
} from 'react-redux'
class Router3_1 extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log(this.props.todos.users)
	}
	render() {
		return (
			<div>
				<Set to="router3" title="个人资料">
				<Me imgwidth="50px" to="/Router3_1" img={this.props.todos.users.userimg}/>
				<div>昵称{this.props.todos.users.username}</div>
				<div>性别{this.props.todos.users.sex}</div>
				<div>生日{this.props.todos.users.birthday}</div>
				<div>所在地{this.props.todos.users.where}</div>
				<div>用户id{this.props.todos.users.id}</div>
				<div>注册时间{this.props.todos.users.Registrationtime}</div>
				</Set>
			</div>
		)
	}
}
var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(Router3_1);