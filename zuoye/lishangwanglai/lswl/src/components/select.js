import React from 'react';
import '../App.css';
class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropdown: false,
            value: ''
        }
        this.switchDropdown = this.switchDropdown.bind(this)
        this.getVal = this.getVal.bind(this);
    }
    switchDropdown() {
        this.setState({
            isDropdown: !this.state.isDropdown
        })
    }
    getVal(val) {
        this.setState({
            value: val
        }, function() {
            this.switchDropdown()
        })
    }
    render() {
        return (
            <div className="select-box" style={{width:this.props.Width||'200px'}}>
                    	<div className={this.state.isDropdown?'x':'t'}></div>
                        <div className="select-input" onClick={this.switchDropdown}>
                            <div className="text">{this.state.value||this.props.defaultValue}</div>
                        </div>
                        {
                            this.state.isDropdown &&
                            <div className="select-options animated fadeInDown">
                                {
                                    React.Children.map(this.props.children,(el,index)=>{
                                        return (
                                            React.cloneElement(el,{
                                                onChange:this.getVal
                                            })
                                        )
                                    })
                                }
                            </div>
                        }
                        
                    </div>
        )
    }
}
export default Select