import React from 'react';
import SidePanel from './SidePanel';
import Content from './Content';

const MainBlock = React.memo(function MainBlock(params) {
	return (
		<main>
			<div className="container">
				<div className="row">
					<SidePanel
						searchHistory={params.searchHistory}
						onClickDropDownFilter={params.onClickDropDownFilter}
						onResetHistory={params.onResetHistory}
					/>
					<Content data={params.data} loading={params.loading} />
				</div>
			</div>
		</main>
	);
});

export default MainBlock;
