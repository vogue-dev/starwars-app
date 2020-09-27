import React from 'react';
import TopSearchBar from '../components/TopSearchBar';
import MainBlock from '../components/MainBlock';

const MainPage = React.memo(function MainPage(params) {
	return (
		<>
			<TopSearchBar
				data={params.data}
				isDroppedDown={params.isDroppedDown}
				setDropDownClose={params.setDropDownClose}
				searchValue={params.searchValue}
				filterFilms={params.filterFilms}
				FitlerDropDown={params.FitlerDropDown}
				setSearchHistory={params.setSearchHistory}
				searchHistory={params.searchHistory}
				seatchValue={params.searchValue}
				setSearch={params.setSearch}
				onClickDropDownFilter={params.onClickDropDownFilter}
			/>
			<MainBlock
				data={params.data}
				isDroppedDown={params.isDroppedDown}
				setDropDownClose={params.setDropDownClose}
				searchValue={params.searchValue}
				filterFilms={params.filterFilms}
				FitlerDropDown={params.FitlerDropDown}
				setSearchHistory={params.setSearchHistory}
				searchHistory={params.searchHistory}
				seatchValue={params.searchValue}
				setSearch={params.setSearch}
				onClickDropDownFilter={params.onClickDropDownFilter}
				onResetHistory={params.onResetHistory}
			/>
		</>
	);
});

export default MainPage;
