import React from 'react';
import FitlerDropDown from './FitlerDropDown';

export default function Search({
	filtered,
	isDroppedDown,
	setDropDownClose,
	searchValue,
	setSearch,
	filterFilms,
	setSearchHistory,
	searchHistory,
	setFilter,
	onClickDropDownFilter,
}) {
	return (
		<nav>
			<div className="container">
				<input placeholder="Search..." value={searchValue} onChange={(e) => filterFilms(e)}></input>
				<FitlerDropDown
					data={filtered}
					isDroppedDown={isDroppedDown}
					setDropDownClose={setDropDownClose}
					setSearchHistory={setSearchHistory}
					searchHistory={searchHistory}
					searchValue={searchValue}
					setSearch={setSearch}
					filterFilms={filterFilms}
					setFilter={setFilter}
					onClickDropDownFilter={onClickDropDownFilter}
				/>
			</div>
		</nav>
	);
}
