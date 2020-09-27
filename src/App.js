import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import MainPage from './pages/MainPage';
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
				height
			}
		}
	}
`;

const App = () => {
	let { loading, data } = useQuery(ALL_PERSONS);

	let [isAuth, setAuth] = useState(false);
	let [isRedirected, setRedirect] = useState('');
	let [isDroppedDown, setVisibleDropdown] = useState(false);
	let [login, setLogin] = useState('');
	let [pass, setPass] = useState('');
	let [searchValue, setSearch] = useState('');
	let [filtered, setFilter] = useState([]);
	let [searchHistory, setSearchHistory] = useState([]);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		if (name === 'login') {
			setLogin(value);
			setFilter(data.allPeople.people);
		} else setPass(value);
	};

	const onLogin = (e) => {
		e.preventDefault();
		if (login === 'admin' && pass === '1111') {
			alert('Login success!');
			setAuth(true);
			setLogin('');
			setPass('');
			setSearch('');
			setRedirect('fromLoginPage');
		} else alert('Please, try again');
	};

	const filterFilms = (e) => {
		const value = e.target.value;
		setSearch(value);
		let filtered = data.allPeople.people.filter((eachPerson) =>
			eachPerson.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilter(filtered);
		setVisibleDropdown(true);
	};

	const onClickDropDownFilter = (str, isHistiryPush) => {
		let arr = searchHistory;
		if (isHistiryPush === true) {
			arr.push(str);
			setSearchHistory(arr);
		}
		let filtered = data.allPeople.people.filter((eachPerson) =>
			eachPerson.name.toLowerCase().includes(str.toLowerCase())
		);
		setSearch(str);
		setFilter(filtered);
		setDropDownClose(true);
	};

	const onResetHistory = () => {
		setSearchHistory([]);
		setSearch('');
		setFilter(data.allPeople.people);
	};

	const setDropDownClose = () => {
		setVisibleDropdown(false);
	};

	return (
		<Router>
			<Header isAuth={isAuth} />
			<Switch>
				<Route
					exact
					path="/"
					render={() =>
						isAuth ? (
							<MainPage
								data={filtered}
								loading={loading}
								searchHistory={searchHistory}
								onClickDropDownFilter={onClickDropDownFilter}
								onResetHistory={onResetHistory}
								isDroppedDown={isDroppedDown}
								setDropDownClose={setDropDownClose}
								searchValue={searchValue}
								filterFilms={filterFilms}
							/>
						) : (
							<div className="container text-center">
								<h3>Please login to see content!</h3>
							</div>
						)
					}
				/>

				<Route
					exact
					path="/login"
					render={() =>
						isRedirected === 'fromLoginPage' ? (
							<Redirect to="/" />
						) : (
							<LoginPage
								isAuth={isAuth}
								login={login}
								pass={pass}
								handleChange={handleChange}
								onLogin={onLogin}
							/>
						)
					}
				/>

				<Route
					exact
					path="/logout"
					render={() =>
						isRedirected === 'fromLogoutPage' ? (
							<Redirect to="/" />
						) : (
							<LogoutPage
								setAuth={setAuth}
								setSearch={setSearch}
								setRedirect={setRedirect}
								setSearchHistory={setSearchHistory}
							/>
						)
					}></Route>
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
