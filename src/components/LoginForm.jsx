import React from 'react';
import Button from '@material-ui/core/Button';

const LoginForm = React.memo(function LoginForm({ login, pass, handleChange, onLogin }) {
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
								placeholder="admin"
								value={login}
								onChange={(event) => handleChange(event)}></input>
							<span>Password: 1111</span>
							<input
								name="pass"
								type="password"
								value={pass}
								onChange={(event) => handleChange(event)}></input>
						</label>
						<Button variant="contained" color="primary" onClick={(event) => onLogin(event)}>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</main>
	);
});
export default LoginForm;
