import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

// import MainPage from './pages/MainPage';
import Items from './components/Items';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import Error404 from './pages/Error404';
import Header from './components/Header';

import './scss/app.scss';

const ALL_PERSONS = gql`
	query getPerson {
		allPeople {
			people {
				name
				gender
				id
			}
		}
	}
`;

const App = () => {
	let { loading, data } = useQuery(ALL_PERSONS);

	let [isAuth, setAuth] = useState(false);
	let [login, setLogin] = useState('');
	let [pass, setPass] = useState('');
	let [searchValue, setSearch] = useState('');
	let [isRedirected, setRedirect] = useState(false);
	let [filtered, setFilter] = useState([]);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if (name === 'login') {
			setLogin(value);
			setFilter(data.allPeople.people);
		} else setPass(value);
	};

	const checkLogin = (e) => {
		e.preventDefault();
		if (login === 'admin' && pass === '1111') {
			alert('Login success!');
			setAuth(true);
			setLogin('');
			setPass('');
			setSearch('');
			setRedirect(true);
		} else alert('Please, try again');
	};

	const filterFilms = (e) => {
		const value = e.target.value;
		setSearch(value);
		let filtered = data.allPeople.people.filter((eachPerson) =>
			eachPerson.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilter(filtered);
	};

	const logoutOnClick = () => {
		alert('success!');
		setAuth(false);
		setSearch('');
		setRedirect(false);
	};

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
									<input
										placeholder="Search..."
										value={searchValue}
										onChange={(e) => filterFilms(e)}></input>
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
													{loading ? 'Loading...' : <Items data={filtered} />}
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
					render={() =>
						isRedirected ? (
							<Redirect to="/" />
						) : (
							<LoginPage
								isAuth={isAuth}
								login={login}
								pass={pass}
								handleChange={handleChange}
								checkLogin={checkLogin}
							/>
						)
					}
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
