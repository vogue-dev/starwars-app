import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

// import MainPage from './pages/MainPage';
import Items from './components/Items';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import Error404 from './pages/Error404';
import Header from './components/Header';

import './scss/app.scss';

const ALL_FILMS = gql`
	query getAllFilm {
		allFilms {
			films {
				title
				openingCrawl
				producers
				releaseDate
				id
			}
		}
	}
`;

const App = () => {
	let { loading, data } = useQuery(ALL_FILMS);

	let [isAuth, setAuth] = useState(false);
	let [login, setLogin] = useState('');
	let [pass, setPass] = useState('');
	let [search, setSearch] = useState('');

	const handleChange = (event) => {
		const value = event.target.value;
		const name = event.target.name;
		if (name === 'login') {
			setLogin(value);
		} else setPass(value);
	};

	const checkLogin = (event) => {
		event.preventDefault();
		if (login === 'admin' && pass === '1111') {
			setAuth(true);
			alert('Login success!');
			setLogin('');
			setPass('');
		} else alert('Please, try again');
	};

	const filterFilms = (event) => {
		const value = event.target.value;
		setSearch(value);

		data.allFilms.films.filter((eachFilm) => eachFilm.title.includes(search));
	};

	const logoutOnClick = () => {
		alert('success!');
		setAuth(false);
	};

	console.log('data', data);
	return (
		<Router>
			<Header isAuth={isAuth} />
			<Switch>
				<Route
					exact
					path="/"
					render={() => (
						<>
							<nav>
								<div className="container">
									<input placeholder="Search..." onChange={(event) => filterFilms(event)}></input>
								</div>
							</nav>
							<main>
								<div className="container">
									<div className="row">
										<aside className="col-3">
											<ul>Search History:</ul>
										</aside>
										{isAuth ? (
											<section className="col-9">
												<div className="items row">
													{loading ? 'Loading...' : <Items data={data} />}
												</div>
											</section>
										) : (
											''
										)}
									</div>
								</div>
							</main>
						</>
					)}
				/>

				<Route
					exact
					path="/login"
					render={() => (
						<LoginPage
							isAuth={isAuth}
							login={login}
							pass={pass}
							handleChange={handleChange}
							checkLogin={checkLogin}
						/>
					)}
				/>

				<Route
					exact
					path="/logout"
					render={() => <LogoutPage logoutOnClick={logoutOnClick} />}></Route>
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
