import React from 'react';
import FitlerDropDown from './FitlerDropDown';

const Search = React.memo(function Search(params) {
	return (
		<nav>
			<div className="container">
				<input
					placeholder="Search..."
					value={params.searchValue}
					onChange={(e) => params.filterFilms(e)}></input>
				<FitlerDropDown
					data={params.data}
					isDroppedDown={params.isDroppedDown}
					setDropDownClose={params.setDropDownClose}
					onClickDropDownFilter={params.onClickDropDownFilter}
				/>
			</div>
		</nav>
	);
});

export default Search;
