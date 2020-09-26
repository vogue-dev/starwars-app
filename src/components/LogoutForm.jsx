import React from 'react';
import Button from '@material-ui/core/Button';

const LogoutForm = React.memo(function LogoutForm({ onClickLogout }) {
	return (
		<main>
			<div className="container">
				<div className="login__form col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
					<div>You realy wonna to logout?</div>
					<Button variant="contained" color="primary" onClick={() => onClickLogout()}>
						Submit
					</Button>
				</div>
			</div>
		</main>
	);
});

export default LogoutForm;
