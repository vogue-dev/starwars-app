import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = React.memo(function LoginPage({ login, pass, handleChange, checkLogin }) {
	return (
		<>
			<LoginForm login={login} pass={pass} handleChange={handleChange} checkLogin={checkLogin} />
		</>
	);
});

export default LoginPage;
