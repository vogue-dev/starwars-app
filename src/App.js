import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Button from '@material-ui/core/Button';

// import MainPage from './pages/MainPage';
import Items from './components/Items';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import Error404 from './pages/Error404';
import Header from './components/Header';
import FitlerDropDown from './components/FitlerDropDown';
import Search from './components/Search';

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
	let [isRedirected, setRedirect] = useState(false);
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
		setVisibleDropdown(true);
		console.log(value);
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

	const resetHistory = () => {
		setSearchHistory([]);
		setSearch('');
	};

	const onClickLogout = () => {
		alert('success!');
		setAuth(false);
		setSearch('');
		setRedirect(false);
		setSearchHistory([]);
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
					render={() => (
						<>
							{isAuth ? (
								<Search
									filtered={filtered}
									isDroppedDown={isDroppedDown}
									setDropDownClose={setDropDownClose}
									searchValue={searchValue}
									filterFilms={filterFilms}
									FitlerDropDown={FitlerDropDown}
									setSearchHistory={setSearchHistory}
									searchHistory={searchHistory}
									seatchValue={searchValue}
									setSearch={setSearch}
									onClickDropDownFilter={onClickDropDownFilter}
								/>
							) : (
								''
							)}
							<main>
								<div className="container">
									<div className="row">
										<aside className="col-3">
											<ul>Search History:</ul>
											{searchHistory.map((eachElement) => (
												<li
													key={eachElement}
													onClick={() => onClickDropDownFilter(eachElement, false)}>
													{eachElement}
												</li>
											))}
											<Button
												variant="contained"
												className="reset__history"
												onClick={() => resetHistory()}>
												Reset
											</Button>
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
								onLogin={onLogin}
							/>
						)
					}
				/>

				<Route
					exact
					path="/logout"
					render={() => <LogoutPage onClickLogout={onClickLogout} />}></Route>
				<Route component={Error404} />
			</Switch>
		</Router>
	);
};

export default App;
