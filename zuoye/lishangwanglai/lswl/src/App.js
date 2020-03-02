import React from 'react';
import './App.css';
import {
	HashRouter,
	Route,
	NavLink,
	Switch
} from 'react-router-dom'
import store from './store'
import Index from './router-components/index'
import Router1 from './router-components/router1'
import Router2 from './router-components/router2'
import Router3 from './router-components/router3'
import Inputer from './components/input'
import Inputer2 from './components/input2'
import {
	connect
} from 'react-redux'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			info: ''
		}
	}
	render() {
		return (
			<HashRouter>
    <div  className="box">
		<Switch>
		  <Route exact strict path="/" component={Index}>
		  </Route>
		  <Route exact strict path="/router1" component={Router1}>	
		  </Route>
		  <Route exact strict path="/router2" component={Router2}>
		  </Route>
		  <Route exact strict path="/router3" component={Router3}>
		  </Route>
		  <Route exact strict path="/jia" component={Inputer}>
		  </Route>
		  <Route exact strict path="/jia2" component={Inputer2}>
		  </Route>
		  <Route>
			  404页面！
		  </Route>
		</Switch>
    </div>
    <div className="nav">
		<NavLink to="/" >首页</NavLink>
		<NavLink to="/router1">礼账</NavLink>
		<NavLink to="/router2">礼事</NavLink>
		<NavLink to="/router3">我的</NavLink>
	</div>
    </HashRouter>
		)
	}
}

var mapStateToProps = function(state) {
	return {
		todos: state
	}
}
export default connect(mapStateToProps)(App);