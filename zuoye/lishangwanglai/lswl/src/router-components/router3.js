import React from 'react';
import '../App.css';
import Me from '../components/me'
import store from '../store'
import Set from '../components/set_component'
class Router3 extends React.Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log(store.getState())
	}
	render() {
		return (
			<div>
				<div style={{background:'#ccc'}}>
					<Set to="/" title="我的">
					<Me text={store.getState().users.username} imgwidth="50px" to="/Router3_1" img={store.getState().users.userimg}/>
					<Me text="设置" imgwidth="19px" img="http://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/small/t4518608796238848.jpg"/>
					<Me text="反馈" imgwidth="19px" img="http://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/small/t4518608796238848.jpg"/>
					<Me text="帮助" imgwidth="19px" img="http://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/small/t4518608796238848.jpg"/>
					<Me text="关于" imgwidth="19px" img="http://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/small/t4518608796238848.jpg"/>
					<Me text="分享" imgwidth="19px" img="http://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/small/t4518608796238848.jpg"/>
					</Set>
				</div>
		</div>
		)
	}
}
export default Router3