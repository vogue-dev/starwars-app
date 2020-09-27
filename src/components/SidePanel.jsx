import React from 'react';
import Button from '@material-ui/core/Button';

const SidePanel = React.memo(function SidePanel(params) {
	return (
		<aside className="col-3">
			<ul>Search History:</ul>
			{params.searchHistory.map((eachElement) => (
				<li key={eachElement} onClick={() => params.onClickDropDownFilter(eachElement, false)}>
					{eachElement}
				</li>
			))}
			<Button
				variant="contained"
				className="reset__history"
				onClick={() => params.onResetHistory()}>
				Reset
			</Button>
		</aside>
	);
});

export default SidePanel;
