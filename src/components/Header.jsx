import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="tagline"></div>
					<Link to="/">
						<div className="logo">
							<img src="./img/Star_Wars_Yellow_Logo.png" alt="logo"></img>
						</div>
					</Link>
					<div className="login">
						{this.props.isAuth ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
					</div>
				</div>
			</header>
		);
	}
}
