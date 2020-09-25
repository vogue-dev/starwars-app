import React, { Component } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

export default class Error404 extends Component {
	render() {
		return (
			<>
				<Header />
				<Search />
				This is 404 page
			</>
		);
	}
}
