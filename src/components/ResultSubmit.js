import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ResultSubmit extends Component {
	
	constructor(props) {
		super(props);
		
		this.state = {
			emailVal: '',
			fNameVal: '',
			lNameVal: ''
		};
	}
	
	render() {
		return (
			<ReactCSSTransitionGroup
			  className="container result"
			  component="div"
			  transitionName="fade"
			  transitionEnterTimeout={800}
			  transitionLeaveTimeout={500}
			  transitionAppear
			  transitionAppearTimeout={500}
			>
				<div>
					<h2> <strong>Support LoveTalk!</strong> </h2>
					<p> By submitting your information below, you will be helping the LoveTalk team in creating a future update! </p>
					<div>
						Email: <input value={this.state.emailVal} onChange={evt => this.update_emailVal(evt)}/>
					</div>
					<div>
						First Name: <input value={this.state.fNameVal} onChange={evt => this.update_fNameVal(evt)}/>
					</div>
					<div>
						Last Name: <input value={this.state.lNameVal} onChange={evt => this.update_lNameVal(evt)}/>
					</div>
					<div>
						<button onClick={sendData}> Submit</button>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		);
	}
	
	update_emailVal(evt) {
		this.setState({
			emailVal: evt.target.value
		});
	}
	
	update_fNameVal(evt) {
		this.setState({
			fNameVal: evt.target.value
		});
	}
	
	update_lNameVal(evt) {
		this.setState({
			lNameVal: evt.target.value
		});
	}
}

export default ResultSubmit;