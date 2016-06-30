import React, { Component, PropTypes } from 'react'

class Calculator extends Component {
	triggerAdd (){
		var n1 = parseInt(this.refs.txtNumber1.value,10),
			n2 = parseInt(this.refs.txtNumber2.value,10)
		this.props.actions.add(n1,n2);
	}
	triggerSubtract (){
		var n1 = parseInt(this.refs.txtNumber1.value,10),
			n2 = parseInt(this.refs.txtNumber2.value,10)
		this.props.actions.subtract(n1,n2);
	}
	triggerMultiply (){
		var n1 = parseInt(this.refs.txtNumber1.value,10),
			n2 = parseInt(this.refs.txtNumber2.value,10)
		this.props.actions.multiply(n1,n2);
	}
	triggerDivide (){
		var n1 = parseInt(this.refs.txtNumber1.value,10),
			n2 = parseInt(this.refs.txtNumber2.value,10)
		this.props.actions.divide(n1,n2);
	}
	render (){
		return (
			<div>
				<h2>Calculator</h2>
				<h3>{this.props.data.operationCount}</h3>
				<input type="text" ref="txtNumber1"/>
				<input type="text" ref="txtNumber2"/>
				<br />
				<input type="button" value="Add" onClick={this.triggerAdd.bind(this)}/>
				<input type="button" value="Subtract" onClick={this.triggerSubtract.bind(this)}/>
				<input type="button" value="Multiply" onClick={this.triggerMultiply.bind(this)}/>
				<input type="button" value="Divide" onClick={this.triggerDivide.bind(this)}/>
				<div>{this.props.data.result}</div>
			</div>
		)
	}
}

export default Calculator;