import React, { Component } from 'react';
import LogoutForm from '../components/LogoutForm';

export default class LogoutPage extends Component {
	render() {
		return (
			<>
				<LogoutForm logoutOnClick={this.props.logoutOnClick} />
				)}
			</>
		);
	}
}
