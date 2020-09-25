import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export default class LoginPag extends Component {
	render() {
		return (
			<>
				<LoginForm
					login={this.login}
					pass={this.pass}
					handleChange={this.props.handleChange}
					checkLogin={this.props.checkLogin}
				/>
			</>
		);
	}
}
