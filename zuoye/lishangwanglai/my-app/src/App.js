import React from 'react';
import './App.css';
import store from './store'
import {
  connect
} from 'react-redux'

import Input from './components/input'
import Lists from './components/lists'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.listc = React.createRef();
  }

  render() {
    return (
      <div className="App">
      <Input/>
      <Lists title="正在进行" todos={this.props.todos} isInfo={false}></Lists>
      <Lists title="已完成" todos={this.props.todos} isInfo={true}></Lists>
    </div>
    )
  }

}
var mapStateToProps = function(state) {
  return {
    todos: state
  }
}
export default connect(mapStateToProps)(App);