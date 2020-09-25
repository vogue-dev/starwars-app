import React, { Component } from 'react';

export default class LoginForm extends Component {
	render() {
		return (
			<main>
				<div className="container">
					<div className="login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
						<form>
							<label>
								<span>Login:</span>
								<input
									name="login"
									type="text"
									placeholder="Hint - admin"
									value={this.props.login}
									onChange={(event) => this.props.handleChange(event)}></input>
								<span>Password: (Hint - 1111)</span>
								<input
									name="pass"
									type="password"
									value={this.props.pass}
									onChange={(event) => this.props.handleChange(event)}></input>
							</label>
							<button onClick={(event) => this.props.checkLogin(event)}>Submit</button>
						</form>
					</div>
				</div>
			</main>
		);
	}
}
