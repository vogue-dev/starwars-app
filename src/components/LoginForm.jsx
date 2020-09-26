import React from 'react';

const LoginForm = React.memo(function LoginForm({ login, pass, handleChange, checkLogin }) {
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
								value={login}
								onChange={(event) => handleChange(event)}></input>
							<span>Password: (Hint - 1111)</span>
							<input
								name="pass"
								type="password"
								value={pass}
								onChange={(event) => handleChange(event)}></input>
						</label>
						<button onClick={(event) => checkLogin(event)}>Submit</button>
					</form>
				</div>
			</div>
		</main>
	);
});
export default LoginForm;
