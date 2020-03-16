import React from 'react';
import './App.css';
import {
	HashRouter,
	Route,
	NavLink,
	Switch
} from 'react-router-dom'
import store from './store'
//路由
import Index from './router-components/index'
import Index_more from './router-components/index_more'
import Start from './router-components/start'
import Router1 from './router-components/router1'
import Router2 from './router-components/router2'
import Router3 from './router-components/router3'
import Inputer from './router-components/input'
import Inputer2 from './router-components/input2'
import Router3_1 from './router-components/router3_1'
//组件
import Nav from './components/nav'
import {
	connect
} from 'react-redux'

class App extends React.Component {
		constructor(props) {
			super(props)
			this.state = {
				info: '',
				time: 7
			}

			this.clears = this.clears.bind(this)
			this.timer = null
		}
		componentWillMount() {
			console.log(store.getState())
			this.timer = setInterval(() => {
				this.setState({
					time: --this.state.time
				})
				if (this.state.time <= 0) {
					clearInterval(this.timer)

				}
			}, 1000)
		}
		clears() {
			this.setState({
				time: 0
			})
			clearInterval(this.timer)
		}
		render() {
			return (
				(this.state.time == 0 && < HashRouter >
					<div  className="box">
					<Switch>
					  <Route exact strict path="/start" component={Start}>
					  </Route>
					  <Route exact strict path="/" component={Index}>
					  </Route>
					  <Route exact strict path="/index_more" component={Index_more}>
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
					  <Route exact strict path="/Router3_1" component={Router3_1}>
					  </Route>
					  <Route>
						  404页面！
					  </Route>
					</Switch>
					<Nav arrs={[{link:"/",title:"首页"},{link:"router1",title:"礼账"},{link:"router2",title:"礼事"},{link:"router3",title:"我的"}]}></Nav>
			    </div>

					<
					/HashRouter>)||<Start time={this.state.time} starts={this.clears}></Start >
				)
			}
		}

		var mapStateToProps = function(state) {
			return {
				todos: state
			}
		}
		export default connect(mapStateToProps)(App);