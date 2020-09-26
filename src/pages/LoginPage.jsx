import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = React.memo(function LoginPage({ login, pass, handleChange, onLogin }) {
	return (
		<>
			<LoginForm login={login} pass={pass} handleChange={handleChange} onLogin={onLogin} />
		</>
	);
});

export default LoginPage;
