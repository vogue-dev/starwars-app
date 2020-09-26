import React from 'react';
import LogoutForm from '../components/LogoutForm';

const LogoutPage = React.memo(function LogoutPage({ onClickLogout }) {
	return (
		<>
			<LogoutForm onClickLogout={onClickLogout} />
			)}
		</>
	);
});

export default LogoutPage;
