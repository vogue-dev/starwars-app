import React, { Component } from 'react';

export default class LogoutForm extends Component {
	render() {
		return (
			<main>
				<div className="container">
					<div className="login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
						<div>You realy wonna to logout?</div>
						<button onClick={(event) => this.props.logoutOnClick(event)}>Submit</button>
					</div>
				</div>
			</main>
		);
	}
}
