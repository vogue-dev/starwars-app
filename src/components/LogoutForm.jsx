import React from 'react';

const LogoutForm = React.memo(function LogoutForm({ logoutOnClick }) {
	return (
		<main>
			<div className="container">
				<div className="login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
					<div>You realy wonna to logout?</div>
					<button onClick={() => logoutOnClick()}>Submit</button>
				</div>
			</div>
		</main>
	);
});

export default LogoutForm;
