import React from 'react';
import { Link } from 'react-router-dom';

const Header = React.memo(function Header({ isAuth }) {
	return (
		<header>
			<div className="container">
				<div className="tagline">SW Person Searcher</div>
				<Link to="/">
					<div className="logo">
						<img src="./img/Star_Wars_Yellow_Logo.png" alt="logo"></img>
					</div>
				</Link>
				<div className="login">
					{isAuth ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
				</div>
			</div>
		</header>
	);
});

export default Header;
