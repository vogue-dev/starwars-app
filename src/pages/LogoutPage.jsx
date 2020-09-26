import React from 'react';
import LogoutForm from '../components/LogoutForm';

const LogoutPage = React.memo(function LogoutPage(params) {
	return (
		<>
			<LogoutForm
				setAuth={params.setAuth}
				setSearch={params.setSearch}
				setRedirect={params.setRedirect}
				setSearchHistory={params.setSearchHistory}
			/>
			)}
		</>
	);
});

export default LogoutPage;
