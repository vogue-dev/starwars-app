import React from 'react';
import LogoutForm from '../components/LogoutForm';

const LogoutPage = React.memo(function LogoutPage({ logoutOnClick }) {
	return (
		<>
			<LogoutForm logoutOnClick={logoutOnClick} />
			)}
		</>
	);
});

export default LogoutPage;
