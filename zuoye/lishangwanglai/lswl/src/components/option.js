import React from 'react';
import '../App.css';
class Option extends React.Component {
    constructor(props) {
        super(props)
        this.handlerClick = this.handlerClick.bind(this)
    }
    handlerClick(val) {
        if (this.props.disabled != false) {
            this.props.onChange(val)
        }
    }
    render() {
        return (
            <p onClick={()=>{this.handlerClick(this.props.value)}} style={{cursor:this.props.disabled==false&&'not-allowed'}}>{this.props.children}</p>
        )
    }
}
export default Option